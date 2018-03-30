const msgs = require('../msg')
const TunnelEvent = require('./tunnelEvent')
const TunnelStatus = require('./tunnelStatus')

/**
 * 创建 LaTeX 渲染信道
 */

var parse = (page, app) => {
  // 关闭之前的信道
  if (app.globalData.tunnelStatus !== TunnelStatus.CLOSE) {
    console.log(`close previous tunnel`)
    app.tunnel.close()
  }
  // 创建一个新的信道，并监听相关数据的变化
  app.initTunnel()
  // 监听 “连接已建立” 的 callback
  app.tunnelConnectCallback = () => {
    console.log(`on tunnel connect callback`)
    // 更新导航栏标题
    wx.setNavigationBarTitle({
      title: msgs.app_title
    })
    // 隐藏导航栏加载动画
    wx.hideNavigationBarLoading()
  }
  // 监听 “连接被关闭（包括主动关闭和被动关闭）” 的 callback
  app.tunnelCloseCallback = () => {
    console.log(`on tunnel close callback`)
  }
  // 监听 “开始重连” 的 callback
  app.tunnelReconnectingCallback = () => {
    console.log(`on tunnel reconnecting callback`)
    // 更新导航栏标题
    wx.setNavigationBarTitle({
      title: msgs.connecting
    })
    // 显示导航栏加载动画
    wx.showNavigationBarLoading()
  }
  // 监听 “重连成功” 的 callback
  app.tunnelReconnectCallback = () => {
    console.log(`on tunnel reconnect callback`)
    // 更新导航栏标题
    wx.setNavigationBarTitle({
      title: msgs.app_title
    })
    // 隐藏导航栏加载动画
    wx.hideNavigationBarLoading()
  }
  // 监听 “信道发生错误” 的 callback
  app.tunnelErrorCallback = err => {
    console.log(`on tunnel error callback: `, err)
  }
  // 监听 “LaTeX 渲染响应” 消息
  app.tunnel.on(TunnelEvent.PARSE_NOTE_TEXT_RES, res => {
    console.info("on tunnel message: ", TunnelEvent.PARSE_NOTE_TEXT_RES)
    if (res) {
      // 更新页面数据 note
      const note = res
      note.blocks = JSON.parse(res.blocks)
      note.noteImageData = JSON.parse(res.noteImageData)
      console.log(`received note: `, res)
      page.setData({
        note: note
      })
      // 更新导航栏标题
      wx.setNavigationBarTitle({
        title: msgs.app_title
      })
      // 隐藏导航栏加载动画
      wx.hideNavigationBarLoading()
    }
  })
}

module.exports = {
  parse: parse
}