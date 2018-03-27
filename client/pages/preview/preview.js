const configs = require('../../config')
const msgs = require('../../msg')

Page({

  /**
   * 页面的初始数据
   */

  data: {
    note: '',
    imgUrl: ''
  },

  /* ================================================================================ */

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    // 从 URL 中读取参数，更新页面数据
    this.setData({
      note: options.note,
      imgUrl: options.img_url
    })
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
      url: `../home/home?note=${this.data.note}`
    })
  }

})
