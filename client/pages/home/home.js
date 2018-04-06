const configs = require('../../config')
const keyboards = require('../../services/keyboards')
const loginService = require('../../services/loginService')
const msgs = require('../../msg')
const tunnelService = require('../../services/tunnelService')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const TunnelEvent = require('../../services/tunnelEvent')
const TunnelStatus = require('../../services/tunnelStatus')
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

    stopBlockTapPropagation: false,

    capsOn: false, // 当前英文字母大小写输入状态
    chineseOn: false, // 当前中文输入状态
    inlineEditing: false, // 当前是否处于 inline 编辑模式
    inlineCache: '', // 当前 inline 编辑缓存区

    keyboards: keyboards, // 当前键盘集
    keyboardId: 0,
    currentKeyboard: '',

    lastRefreshTime: new Date().getTime(), // 上次刷新时间

    characters: ''
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
      console.log(`不执行转发小程序`)
      return
    }
    if (this.data.appMode === APP_MODE_EDIT) {
      this.setData({
        appMode: APP_MODE_PREVIEW
      })
    }
    return {
      title: ' ',
      path: `pages/preview/preview?note_id=${this.data.note.noteId}`,
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
  },

  /**
   * 绑定事件：点击 noteWorkspace
   */

  noteWorkspaceTap: function () {
    console.log(`点击 noteWorkspace`)
    // 禁止 block 点击事件传播给 noteWorkspace
    if (this.data.stopBlockTapPropagation) {
      this.setData({
        stopBlockTapPropagation: false
      })
      return
    }
    // 更新页面数据 appMode
    const appMode = this.data.appMode
    if (appMode === APP_MODE_PREVIEW) {
      this.setData({
        appMode: APP_MODE_EDIT
      })
    } else if (appMode === APP_MODE_EDIT) {
      this.setData({
        appMode: APP_MODE_PREVIEW
      })
    }
  },

  /**
   * 绑定事件：点击 block
   */

  blockTap: function (e) {
    console.log(`点击 block`)
    // 在编辑模式下，禁止 block 点击事件传播给 noteWorkspace
    if (this.data.appMode === APP_MODE_EDIT) {
      this.setData({
        stopBlockTapPropagation: true
      })
    }
    // 查看 block
    const blockId = e.currentTarget.dataset.blockId
    this.viewBlock(blockId)
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

  /**
   * 绑定事件：点击 toolbarPrefix
   */

  toolbarPrefixTap: function (e) {
    console.log(`点击 toolbarPrefix`)
    this.setData({
      appMode: APP_MODE_EDIT,
      keyboardId: 0,
      currentKeyboard: keyboards[0].name
    })
  },

  /**
   * 绑定事件：点击 toolbarTab
   */

  toolbarTabTap: function (e) {
    const keyboardId = e.currentTarget.dataset.keyboardId
    console.log(`点击 toolbarTab: `, keyboardId)
    this.setData({
      appMode: APP_MODE_EDIT,
      keyboardId: keyboardId,
      currentKeyboard: keyboards[keyboardId].name
    })
  },

  /**
   * 绑定事件：swiper 的 current 属性改变
   */

  keyboardSwiperChange: function (e) {
    const current = e.detail.current
    console.log(`current swiper item: ${current}`)
    // 更新页面数据 keyboardId
    this.setData({
      keyboardId: current,
      currentKeyboard: keyboards[current].name
    })
  },

  /**
   * 绑定事件：点击 chineseKeyTap
   */

  chineseKeyTap: function () {
    console.log(`点击 chineseKey`)
    const chineseOn = this.data.chineseOn
    // 更新页面数据 chineseOn
    this.setData({
      chineseOn: true
    })
  },

  /**
   * 绑定事件：chineseInput 输入中
   */

  chineseTextInput: function (e) {
    const value = e.detail.value
    console.log(`chineseInput 输入中：`, value)
    this.setData({
      characters: value
    })
    console.log(this.data.characters)
  },

  /**
   * 绑定事件：chineseInput 输入完成
   */

  chineseTextConfirm: function (e) {
    console.log(`chineseInput 输入完成`)
    const code = '\\mbox{' + this.data.characters + '}'
    this.buildBlocks(code, 'teal')
    // 更新页面数据 chineseOn
    this.setData({
      chineseOn: false,
      characters: ''
    })
  },

  /**
   * 绑定事件：点击 chineseSubmitButton
   */

  chineseSubmitButtonTap: function () {
    console.log(`点击 chineseSubmitButton`)
    const code = '\\mbox{' + this.data.characters + '}'
    this.buildBlocks(code, 'teal')
    // 更新页面数据 chineseOn
    this.setData({
      chineseOn: false,
      characters: ''
    })
  },

  /**
   * 绑定事件：点击 chineseCancelButton
   */

  chineseCancelButtonTap: function () {
    console.log(`点击 chineseCancelButton`)
    // 更新页面数据 chineseOn
    this.setData({
      chineseOn: false,
      characters: ''
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
   * 绑定事件：点击 commandKey
   */

  commandKeyTap: function (e) {
    // 组装 blocks
    const name = e.currentTarget.dataset.name
    const value = e.currentTarget.dataset.value
    console.log(`点击 commandKey: `, name, value)
    switch (name) {
      case 'del':
        this.deleteBlock()
        break
      case '\\':
        this.buildBlocks(value, 'green')
        // 进入 inline 编辑模式
        if (!this.data.inlineEditing) {
          this.setData({
            inlineEditing: true,
            inlineCache: '\\'
          })
        }
        break
      case '+':
      case '-':
      case '=':
      case '^':
      case '_':
        this.buildBlocks(value, 'orange')
        break
      default:
        this.buildBlocks(value, 'brown')
        break
    }
  },

  /**
   * 绑定事件：点击 donateButton
   */

  donateButtonTap: function () {
    console.log(`点击 donateButton`)
    this.donate()
  },

  /**
   * 绑定事件：点击 key
   */

  keyTap: function (e) {
    // 组装 blocks
    const value = e.currentTarget.dataset.value
    const keyType = e.currentTarget.dataset.keyType
    console.log(`点击 key: ${value}`)
    switch (keyType) {
      case 'greek':
        this.buildBlocks(value, 'cyan')
        break
      case 'letter':
        const res = this.data.capsOn ? value.toUpperCase() : value
        this.buildBlocks(res, this.data.inlineEditing ? 'green' : 'red')
        break
      case 'number':
        this.buildBlocks(value, 'blue')
        break
      case 'operator':
        this.buildBlocks(value, 'orange')
        break
      default:
        this.buildBlocks(value)
    }
  },

  /**
   * 绑定事件：点击 saveButton
   */

  saveButtonTap: function () {
    if (!this.data.note.noteImageData) {
      console.log(`不执行保存图片到相册`)
      return
    }
    console.log(`点击 saveButton`)
    // 下载 note image
    this.downloadImage().then(res => {
      // 图片下载成功，则显示 “保存到相册” 弹窗
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
                  mask: true
                })
              },
              // 图片保存失败
              fail: err => {
                console.log(`图片保存失败：`, err)
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
   * 绑定事件：点击 spaceButton
   */

  spaceButtonTap: function () {
    console.log(`点击 spaceButton`)
    this.buildBlocks(' ')
  },

  /**
   * 绑定事件：点击 refreshButton
   */

  refreshButtonTap: function () {
    console.log(`点击 refreshButton`)
    // 发送 “LaTeX 渲染请求” 信道消息
    this.sendParseMessage()
  },

  /* ================================================================================ */

  /**
   * 获取初始 note 数据
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
        console.log(`获取初始 note 数据失败`)
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
   * 打赏
   */

  donate: function () {
    // 显示 loading 提示框
    wx.showLoading({
      title: msgs.loading_title,
      mask: true
    })
    // 调用微信支付统一下单接口
    qcloud.request({
      url: `${configs.weapp}/donate/place_order`,
      login: true,
      success: res => {
        console.log(`下单成功：`, res)
        // 隐藏 loading 提示框
        wx.hideLoading()
        // 发起微信支付请求
        const payData = res.data.data
        wx.requestPayment({
          'timeStamp': payData.timeStamp,
          'nonceStr': payData.nonceStr,
          'package': payData.package,
          'signType': payData.signType,
          'paySign': payData.paySign,
          'success': res => {
            console.log(`支付成功：`, res)
            wx.showToast({
              title: msgs.pay_success_title,
              mask: true
            })
          },
          'fail': err => {
            console.log(`支付失败：`, err)
            switch (err.errMsg) {
              case 'requestPayment:fail cancel':
                break
              default:
                wx.showToast({
                  title: msgs.pay_fail_title,
                  image: '/assets/images/warning.png',
                  mask: true
                })
            }
          }
        })
      },
      fail: err => {
        console.log(`下单失败：`, err)
        // 隐藏 loading 提示框
        wx.hideLoading()
        wx.showToast({
          title: msgs.request_fail_title,
          image: '/assets/images/warning.png',
          mask: true
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
    // 更新页面数据 appMode
    if (this.data.appMode === APP_MODE_EDIT) {
      this.setData({
        appMode: APP_MODE_PREVIEW
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
    if (!this.data.tutor || !app.tunnel || app.globalData.tunnelStatus === TunnelStatus.CLOSE) {
      console.log(`重新建立信道...本次操作取消`)
      loginService.ensureLoggedIn().then(() => {
        // 从本地缓存中读取 tutor，更新页面数据 tutor
        this.setData({
          tutor: Tutor.get()
        })
        // 启动信道服务
        tunnelService.parse(this, getApp())
        // return
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
        url: `${configs.weapp}/download/${this.data.note.noteImageData.pngImageName}`,
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

  buildBlocks: function (key, color) {
    // 设置 block 默认字体颜色
    if (!color || color.length === 0) {
      color = 'white'
    }
    // 准备 code
    let code = ''
    if (this.data.inlineEditing) {
      if (/^[A-Za-z]+$/.test(key)) {
        // 如果当前处于 inline 编辑模式，并且 key 为字母，则输出 code 为 cache + key
        code = this.data.inlineCache + key
        this.setData({
          inlineCache: code
        })
      } else {
        // 否则，正常输出 code 为 key，并且退出 inline 编辑模式
        code = key
        this.setData({
          inlineEditing: false,
          inlineCache: ''
        })
      }
    } else {
      // 否则，正常输出 code 为 key
      code = key
    }
    // 为新 blocks 准备 color-value pairs
    const coloredValues = code.split('$')
    const items = []
    for (let i = 0; i < coloredValues.length; i++) {
      // 获取一组 color-value pair
      const cvpair = coloredValues[i].split('@')
      // 添加新的 blocks
      items.push({
        wxKey: new Date().getTime(),
        blockType: 'regular',
        value: cvpair[0],
        color: cvpair[1] ? cvpair[1] : color,
        backgroundColor: 'none'
      })
    }
    const blocks = this.data.note.blocks
    let cursorId = this.data.note.cursorId
    if (this.data.inlineEditing) {
      // 如果当前处于 inline 编辑模式，使用新的 block 替换光标之前的原 block
      blocks[cursorId - 1] = items[0]
    } else {
      // 否则，在光标之前插入新的 blocks
      // 取消 block 高亮效果
      if (cursorId > 0) {
        blocks[cursorId - 1].backgroundColor = 'none'
      }
      // 插入新 blocks
      blocks.splice(cursorId, 0, ...items)
      // 更新光标位置：后移 items.length 位
      cursorId += items.length
      // 为最后一个 block 添加高亮效果
      if (cursorId > 0) {
        blocks[cursorId - 1].backgroundColor = 'grey'
      }
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

  deleteBlock: function () {
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
    // 如果当前处于 inline 编辑模式，则退出
    if (this.data.inlineEditing) {
      this.setData({
        inlineEditing: false,
        inlineCache: ''
      })
    }
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
    // 如果当前处于 inline 编辑模式，则退出
    if (this.data.inlineEditing) {
      this.setData({
        inlineEditing: false,
        inlineCache: ''
      })
    }
  }

})
