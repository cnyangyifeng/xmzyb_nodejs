const configs = require('../config')
const msgs = require('../msg')
const qcloud = require('../vendor/wafer2-client-sdk/index')
const Tutor = require('./tutor')

/**
 * 确保用户始终处于登录状态
 */

var ensureLoggedIn = function () {
  return new Promise((resolve, reject) => {
    // 如果在本地缓存中存在 Session 数据，则直接返回操作成功
    // 否则，执行登录操作
    if (qcloud.getSession()) {
      resolve()
    } else {
      // 显示 loading 提示框
      wx.showLoading({
        title: msgs.login_processing_title,
        mask: true
      })
      // 为了获取更多的用户信息，例如 hearts, praises
      // 放弃 qcloud.login, 直接使用 qcloud.request
      qcloud.request({
        url: `${configs.weapp}/tutor`,
        login: true,
        success: res => {
          // 更新本地缓存数据 tutor
          const tutor = res.data.data
          const tutorInfo = JSON.parse(tutor.tutorInfo)
          tutor.tutorInfo = tutorInfo
          Tutor.set(tutor)
          // 隐藏 loading 提示框
          wx.hideLoading()
          // 操作成功
          resolve()
        },
        fail: err => {
          // 隐藏 loading 提示框
          wx.hideLoading()
          // 显示 “登录失败” 弹窗
          switch (err.type) {
            // 获取用户信息失败，则显示 “获取用户信息失败” 弹窗
            case qcloud.ERR_WX_GET_USER_INFO:
              wx.showModal({
                title: msgs.login_fail_title,
                content: msgs.auth_user_info_fail_content,
                showCancel: false,
                success: function (res) {
                  // 点击 “确定” 按钮，则调起 “小程序设置” 页面
                  if (res.confirm) {
                    wx.openSetting()
                  }
                }
              })
              break
            // 显示默认 “登录失败” 弹窗
            default:
              wx.showModal({
                title: msgs.login_fail_title,
                content: err.message,
                showCancel: false
              })
          }
          // 操作失败
          // reject()
        }
      })
    }
  })
}

module.exports = {
  ensureLoggedIn: ensureLoggedIn
}