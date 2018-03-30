const configs = require('../../config')
const keyboards = require('../../services/keyboards')
const loginService = require('../../services/loginService')
const msgs = require('../../msg')
const tunnelService = require('../../services/tunnelService')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const TunnelEvent = require('../../services/tunnelEvent')
const Tutor = require('../../services/tutor')

const APP_MODE_PREVIEW = 'preview'
const APP_MODE_EDIT = 'edit'

Page({

  /**
   * 页面的初始数据
   */

  data: {

    appMode: APP_MODE_PREVIEW, // 当前 app mode

    tutor: null, // 当前 tutor

    note: { // 当前 note
      noteId: '',
      noteText: '',
      blocks: [],
      cursorId: 0, // 当前光标的位置
      noteImageData: null,
      createTime: ''
    },

    cursor: { blockType: 'cursor' }, // 当前光标

    capsOn: false, // 当前字母输入大小写状态

    lastRefreshTime: new Date().getTime(), // 上次刷新时间

    keyboards: keyboards, // 当前键盘集
    keyboardId: 0

  },

  /* ================================================================================ */

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    // 从 URL 中读取 note_id 参数，更新页面数据 note
    const noteId = options.note_id
    if (noteId) {
      console.log(`初始 note id: `, options.note_id)
      this.requestNote(noteId)
    } else {
      // 更新页面数据 note
      const note = this.data.note
      note.blocks = [this.data.cursor]
      note.cursorId = 0
      this.setData({
        note: note
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
      // 启动信道服务
      tunnelService.parse(this, getApp())
    })
  },

  /**
   * 用户点击右上角转发
   */

  onShareAppMessage: function () {
    if (!this.data.note.noteImageData) {
      console.log(`不执行转发小程序，本次操作结束`)
      return
    }
    if (this.data.appMode === APP_MODE_EDIT) {
      this.setData({
        appMode: APP_MODE_PREVIEW
      })
      setTimeout(() => {
        // 应用模式切换以后延时转发
      }, 1000)
    }
    return {
      title: ' ',
      path: `pages/preview/preview?note_id=${this.data.note.noteId}`,
      // imageUrl: this.data.note.noteImageData.imgUrl,
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
   * 绑定事件：点击 noteImageContainer
   */

  noteImageContainerTap: function () {
    console.log(`点击 noteImageContainer`)
    const appMode = this.data.appMode
    if (appMode === APP_MODE_PREVIEW) {
      // 更新页面数据 appMode
      this.setData({
        appMode: APP_MODE_EDIT
      })
    } else if (appMode === APP_MODE_EDIT) {
      // 更新页面数据 appMode
      this.setData({
        appMode: APP_MODE_PREVIEW
      })
    }
  },

  /**
   * 绑定事件：点击 noteWorkspace
   */

  noteWorkspaceTap: function () {
    console.log(`点击 noteWorkspace`)
    const appMode = this.data.appMode
    if (appMode === APP_MODE_PREVIEW) {
      // 更新页面数据 appMode
      this.setData({
        appMode: APP_MODE_EDIT
      })
    }
  },

  /**
   * 绑定事件：点击 block
   */

  blockTap: function (e) {
    console.log(`点击 block`)
    // 查看 block
    const blockId = e.currentTarget.dataset.blockId
    this.viewBlock(blockId)
  },

  /**
   * 绑定事件：点击 toolbarTab
   */

  toolbarTabTap: function (e) {
    const keyboardId = e.currentTarget.dataset.keyboardId
    console.log(`点击 toolbarTab: `, keyboardId)
    this.setData({
      appMode: APP_MODE_EDIT,
      keyboardId: keyboardId
    })
  },

  /**
   * 绑定事件：点击 capsKeyTap
   */

  capsKeyTap: function () {
    console.log(`点击 capsKey`)
    const capsOn = this.data.capsOn
    // 更新页面数据 capsOn
    this.setData({
      capsOn: !capsOn
    })
  },

  /**
   * 绑定事件：点击 delKey
   */

  delKeyTap: function () {
    console.log(`点击 delKey`)
    // 删除 block
    this.delBlock()
  },

  /**
   * 绑定事件：点击 key
   */

  keyTap: function (e) {
    const value = e.currentTarget.dataset.value
    const keyType = e.currentTarget.dataset.keyType
    console.log(`点击 key: ${value}`)
    switch (keyType) {
      case 'greek':
        this.buildBlocks(value, 'green')
        break
      case 'letter':
        const res = this.data.capsOn ? value.toUpperCase() : value
        this.buildBlocks(res, 'red')
        break
      case 'number':
        this.buildBlocks(value, 'blue')
        break
      case 'operator':
        this.buildBlocks(value, 'yellow')
        break
      default:
        this.buildBlocks(value)
    }
  },

  /**
   * 绑定事件：点击 refreshButton
   */

  refreshButtonTap: function () {
    console.log(`点击 refreshButton`)
    // 发送 “LaTeX 渲染请求” 信道消息
    this.sendParseMessage()
  },

  /**
   * 绑定事件：点击 saveButton
   */

  saveButtonTap: function () {
    if (!this.data.note.noteImageData) {
      console.log(`不执行保存图片到相册，本次操作结束`)
      return
    }
    console.log(`点击 saveButton`)
    // 下载 note image
    this.downloadImage().then(res => {
      // 图片下载成功，则显示 “保存到相册” 弹框
      const tempFilePath = res.tempFilePath
      wx.showModal({
        title: msgs.confirm_save_note_image_title,
        content: msgs.confirm_save_note_image_content,
        success: res => {
          if (res.confirm) {
            // 点击 “确定” 按钮，保存图片到相册
            wx.saveImageToPhotosAlbum({
              filePath: tempFilePath,
              // 图片保存成功
              success: res => {
                console.log(`图片保存成功`)
                wx.showToast({
                  title: msgs.save_note_image_success_title,
                  image: '/assets/images/right.png',
                  mask: true
                })
              },
              // 图片保存失败
              fail: err => {
                console.log(`图片保存失败：`, err)
                console.log(err)
                // 显示 “登录失败” 弹窗
                switch (err.errMsg) {
                  // 用户拒绝授权 “保存到相册”，则显示 “保存失败” 弹窗
                  case 'saveImageToPhotosAlbum:fail auth deny':
                    wx.showModal({
                      title: msgs.save_note_image_fail_title,
                      content: msgs.save_note_image_fail_content,
                      showCancel: false,
                      success: function (res) {
                        // 点击 “确定” 按钮，则调起 “小程序设置” 页面
                        if (res.confirm) {
                          wx.openSetting()
                        }
                      }
                    })
                    break
                  case 'saveImageToPhotosAlbum:fail cancel':
                    break
                  // 显示 “保存失败” 弹窗
                  default:
                    wx.showToast({
                      title: msgs.save_note_image_fail_title,
                      image: '/assets/images/warning.png',
                      mask: true
                    })
                }
              }
            })
          } else if (res.cancel) {
            // 点击 “取消” 按钮，取消保存图片
            console.log(`取消保存图片`)
          }
        }
      })
    }, () => {
      // 图片下载失败，则显示失败消息提示框
      wx.showToast({
        title: msgs.download_fail_title,
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
    const appMode = this.data.appMode
    if (appMode === APP_MODE_PREVIEW) {
      // 更新页面数据 appMode
      this.setData({
        appMode: APP_MODE_EDIT
      })
    } else if (appMode === APP_MODE_EDIT) {
      // 更新页面数据 appMode
      this.setData({
        appMode: APP_MODE_PREVIEW
      })
    }
  },

  /* ================================================================================ */

  /**
   * 获取初始 note
   */

  requestNote: function (noteId) {
    qcloud.request({
      url: `${configs.weapp}/notes/${noteId}`,
      success: res => {
        // 成功，则更新页面数据 note
        const note = res.data.data
        const blocks = JSON.parse(note.blocks)
        const noteImageData = JSON.parse(note.noteImageData)
        note.blocks = blocks
        note.noteImageData = noteImageData
        this.setData({
          note: note
        })
      },
      fail: err => {
        // 失败，则显示失败消息提示框
        console.log(`初始 note 获取失败`)
        wx.showToast({
          title: msgs.request_fail_title,
          image: '/assets/images/warning.png',
          mask: true
        })
        // 更新页面数据 note
        const note = this.data.note
        note.blocks = [this.data.cursor]
        this.setData({
          note: note
        })
      }
    })
  },

  /**
   * 发送 “LaTeX 渲染请求” 信道消息
   */

  sendParseMessage: function () {
    console.log(`发送 “LaTeX 渲染请求” 信道消息`)
    // 根据 blocks 组装 note text
    const blocks = this.data.note.blocks
    let noteText = ''
    for (let i = 0; i < blocks.length; i++) {
      const value = blocks[i].value
      if (value !== undefined) {
        noteText = noteText + blocks[i].value
      }
    }
    console.log(`note text:「${noteText}」`)
    // 更新页面数据 note
    if (noteText.length === 0) {
      console.log(`不发送信道消息，本次操作结束`)
      return
    } else {
      const note = this.data.note
      note.noteText = noteText
      this.setData({
        note: note
      })
    }
    // 检查刷新时间，3s 之内不发送信道消息
    const refreshTime = new Date().getTime()
    const lastRefreshTime = this.data.lastRefreshTime
    if (refreshTime - lastRefreshTime < 3000) {
      console.log(`忽略本次刷新请求, refreshTime: ${refreshTime}, lastRefreshTime: ${lastRefreshTime}`)
      return
    } else {
      this.setData({
        lastRefreshTime: refreshTime
      })
    }
    // 发送信道消息
    const app = getApp()
    if (!this.data.tutor || !app.tunnel) {
      console.log(`重新建立信道...本次操作已取消`)
      loginService.ensureLoggedIn().then(() => {
        // 从本地缓存中读取 tutor，更新页面数据 tutor
        this.setData({
          tutor: Tutor.get()
        })
        // 启动信道服务
        tunnelService.parse(this, getApp())
      })
    }
    // 准备信道消息
    const content = {
      tutorId: this.data.tutor.tutorId,
      note: this.data.note
    }
    // 发送信道消息
    app.tunnel.emit(TunnelEvent.PARSE_NOTE_TEXT_REQ, content)
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: msgs.rendering
    })
    console.log(`emit a '${TunnelEvent.PARSE_NOTE_TEXT_REQ}' message: `, content)
  },

  /**
   * 下载 note image
   */

  downloadImage: function () {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: `${configs.weapp}/download/${this.data.note.noteImageData.tempFileName}`,
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
          reject()
        }
      })
    })
  },

  /**
   * 组装 blocks
   */

  buildBlocks: function (key, color, backgroundColor) {
    // 设置 block 默认字体颜色
    if (!color) {
      color = 'white'
    }
    // 设置 block 默认背景颜色
    if (!backgroundColor) {
      backgroundColor = 'none'
    }
    // 准备新 block
    const item = {
      wxKey: new Date().getTime(),
      blockType: 'regular',
      value: key,
      color: color,
      backgroundColor: backgroundColor
    }
    const blocks = this.data.note.blocks
    let cursorId = this.data.note.cursorId
    // 取消 block 高亮效果
    if (cursorId > 0) {
      blocks[cursorId - 1].backgroundColor = 'none'
    }
    // 插入新 block
    blocks.splice(cursorId, 0, item)
    // 更新光标位置：后移一位
    cursorId++
    // 添加 block 高亮效果
    if (cursorId > 0) {
      blocks[cursorId - 1].backgroundColor = 'grey'
    }
    // 更新页面数据 note
    const note = this.data.note
    note.blocks = blocks
    note.cursorId = cursorId
    this.setData({
      note: note
    })
  },

  /**
   * 删除 block
   */

  delBlock: function () {
    const blocks = this.data.note.blocks
    let cursorId = this.data.note.cursorId
    // 取消 block 高亮效果
    if (cursorId > 0) {
      blocks[cursorId - 1].backgroundColor = 'none'
    } else {
      return
    }
    // 更新光标位置：前移一位
    cursorId--
    // 删除 block
    blocks.splice(cursorId, 1)
    // 添加 block 高亮效果
    if (cursorId > 0) {
      blocks[cursorId - 1].backgroundColor = 'grey'
    }
    // 更新页面数据 note
    const note = this.data.note
    note.blocks = blocks
    note.cursorId = cursorId
    this.setData({
      note: note
    })
  },

  /**
   * 查看 block
   */

  viewBlock: function (blockId) {
    const blocks = this.data.note.blocks
    let cursorId = this.data.note.cursorId
    // 取消 block 高亮效果
    if (cursorId > 0) {
      blocks[cursorId - 1].backgroundColor = 'none'
    }
    // 删除光标
    blocks.splice(cursorId, 1)
    // 调整当前 block id
    if (blockId >= cursorId) {
      blockId--
    }
    // 添加 block 高亮效果
    blocks[blockId].backgroundColor = 'grey'
    // 更新光标位置
    cursorId = blockId + 1
    // 插入光标
    blocks.splice(cursorId, 0, this.data.cursor)
    // 更新页面数据 note
    const note = this.data.note
    note.blocks = blocks
    note.cursorId = cursorId
    this.setData({
      note: note
    })
  }

})
