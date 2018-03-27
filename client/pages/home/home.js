const configs = require('../../config')
const loginService = require('../../services/loginService')
const msgs = require('../../msg')
const noteService = require('../../services/noteService')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const TunnelEvent = require('../../services/tunnelEvent')
const Tutor = require('../../services/tutor')

Page({

  /**
   * 页面的初始数据
   */

  data: {
    tutor: null, // 当前 tutor

    noteImageData: '', // 当前 note 的 image data

    draft: '', // 当前 noteTextarea 的绑定文本内容
    note: '', // 当前 note 文本内容

    editing: true, // 当前 noteTextarea 的 “编辑状态”
    focused: false, // 当前 noteTextarea 的 “焦点状态”
    indicator: 0, // 当前 noteTextarea 的光标位置
  },

  /* ================================================================================ */

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    // 从 URL 中读取参数，更新页面数据
    if (options.note) {
      this.setData({
        note: options.note,
        draft: options.note
      })
    }
  },

  /**
   * 监听页面显示
   */

  onShow: function () {
    loginService.ensureLoggedIn().then(() => {
      // 从本地缓存中读取 tutor，更新页面数据 tutor
      this.setData({
        tutor: Tutor.get()
      })
      noteService.parse(this, getApp())
    })
  },

  /**
   * 用户点击右上角转发
   */

  onShareAppMessage: function () {
    return {
      title: ' ',
      path: `pages/preview/preview?note=${this.data.note}&img_url=${this.data.noteImageData.imgUrl}`,
      imageUrl: this.data.noteImageData.imgUrl,
      success: res => {
        console.log(`转发成功`)
      },
      fail: err => {
        console.log(`取消转发`)
      }
    }
  },

  /* ================================================================================ */

  /**
   * 绑定事件：点击 noteImage
   */

  noteImageTap: function () {
    console.log(`点击 noteImage`)
  },

  /**
   * 绑定事件：noteTextarea 获取焦点
   */

  noteTextareaFocus: function () {
    console.log(`noteTextarea 聚焦`)
    // 获取焦点
    if (!this.data.focused) {
      this.setData({
        focused: true
      })
    }
    // 进入 “编辑” 状态
    if (!this.data.editing) {
      this.setData({
        editing: true
      })
    }
  },

  /**
   * 绑定事件：noteTextarea 失去焦点
   */

  noteTextareaBlur: function () {
    console.log(`noteTextarea 失去焦点`)
    // 失去焦点
    if (this.data.focused) {
      this.setData({
        focused: false
      })
    }
    // 退出 “编辑” 状态
    if (this.data.editing) {
      this.setData({
        editing: false
      })
    }
  },

  /**
   * 绑定事件：noteTextarea 输入
   */

  noteTextareaInput: function (e) {
    const { value, cursor } = e.detail
    console.log(`noteTextarea 输入内容：${value}, 当前光标位置：${cursor}`)
    // 设置 note 文本内容，noteTextarea 的光标位置
    this.setData({
      note: value,
      indicator: cursor
    })
  },

  /**
   * 绑定事件：noteTextarea 输入完成
   */

  noteTextareaConfirm: function (e) {
    console.log(`noteTextarea 输入完成：`, e.detail.value)
    // 发送 “LaTeX 渲染请求” 消息
    this.sendParseMessage()
  },

  /**
   * 绑定事件：点击 refreshButton
   */

  refreshButtonTap: function () {
    console.log(`点击 refreshButton`)
    // 发送 “LaTeX 渲染请求” 消息
    this.sendParseMessage()
  },

  /**
   * 绑定事件：点击 saveButton
   */

  saveButtonTap: function () {
    console.log(`点击 saveButton`)
    // 下载 note 图片
    this.downloadImage().then(res => {
      // 图片下载成功，则显示 “保存至相册” 弹框
      const tempFilePath = res.tempFilePath
      wx.showModal({
        title: msgs.confirm_save_note_title,
        content: msgs.confirm_save_note_content,
        success: res => {
          if (res.confirm) {
            // 点击 “确定” 按钮，保存图片至相册
            wx.saveImageToPhotosAlbum({
              filePath: tempFilePath,
              // 图片保存成功
              success: res => {
                console.log(`图片保存成功`)
                wx.showToast({
                  title: msgs.save_note_success_title,
                  image: '/assets/images/right.png',
                  mask: true
                })
              },
              // 图片保存失败
              fail: err => {
                console.log(`图片保存失败：`, err)
                wx.showToast({
                  title: msgs.save_note_fail_title,
                  image: '/assets/images/warning.png',
                  mask: true
                })
              }
            })
          } else if (res.cancel) {
            // 点击 “取消” 按钮，取消保存图片
            console.log(`取消保存图片`)
          }
        }
      })
    }, err => {
      // 图片下载失败，则显示失败消息提示框
      wx.showToast({
        title: msgs.request_fail_title,
        image: '/assets/images/warning.png',
        mask: true
      })
    })
  },

  /**
   * 绑定事件：点击 toolbarSwitch
   */

  toolbarSwitchTap: function () {
    console.log(`点击 toolbarSwitch`)
  },

  /* ================================================================================ */

  /**
   * 发送 “LaTeX 渲染请求” 消息
   */

  sendParseMessage: function () {
    if (this.data.note.length === 0) {
      return
    }
    loginService.ensureLoggedIn().then(() => {
      const app = getApp()
      const content = {
        tutorId: this.data.tutor.tutorId,
        tunnelId: app.tunnel.socketUrl.slice(app.tunnel.socketUrl.indexOf('tunnelId=') + 9, app.tunnel.socketUrl.indexOf('&')),
        note: this.data.note,
        createTime: new Date().getTime()
      }
      app.tunnel.emit(TunnelEvent.PARSE_NOTE_REQ, content)
      wx.showNavigationBarLoading()
      console.log(`emit a '${TunnelEvent.PARSE_NOTE_REQ}' message: `, content)
    })
  },

  /**
   * 下载 note 图片
   */

  downloadImage: function () {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: `${configs.weapp}/download/${this.data.noteImageData.tempFileName}`,
        // 图片下载成功
        success: res => {
          console.log(`图片下载成功：`, res.tempFilePath)
          if (res.statusCode === 200) {
            resolve(res)
          }
        },
        // 图片下载失败
        fail: err => {
          console.log(`图片下载失败：`, err)
          reject(err)
        }
      })
    })
  }

})
