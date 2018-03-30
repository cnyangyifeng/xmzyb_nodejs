const configs = require('../../config')
const msgs = require('../../msg')
const qcloud = require('../../vendor/wafer2-client-sdk/index')

Page({

  /**
   * 页面的初始数据
   */

  data: {
    note: { // 当前 note
      noteId: '',
      noteText: '',
      blocks: [],
      cursorId: 0,
      noteImageData: '',
      createTime: ''
    },
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
    }
  },

  /**
   * 监听页面显示
   */

  onShow: function () {
  },

  /* ================================================================================ */

  /**
   * 绑定事件：点击 noteImage
   */

  noteImageTap: function () {
    console.log(`点击 noteImage`)
  },

  /**
   * 绑定事件：点击 editButton
   */

  editButtonTap: function () {
    console.log(`点击 editButton`)
    // 重定向至 home 页面
    wx.redirectTo({
      url: `../home/home?note_id=${this.data.note.noteId}`
    })
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
        console.log(`获取初始 note 失败`)
        wx.showToast({
          title: msgs.request_fail_title,
          image: '/assets/images/warning.png',
          mask: true
        })
      }
    })
  }

})
