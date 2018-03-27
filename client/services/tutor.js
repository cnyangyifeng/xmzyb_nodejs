const TUTOR_KEY = 'tutor'

var Tutor = {

  get: function () {
    return wx.getStorageSync(TUTOR_KEY) || null
  },

  set: function (session) {
    wx.setStorageSync(TUTOR_KEY, session)
  },

  clear: function () {
    wx.removeStorageSync(TUTOR_KEY)
  }

}

module.exports = Tutor