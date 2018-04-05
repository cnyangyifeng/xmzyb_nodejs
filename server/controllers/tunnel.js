const coredb = require('../services/coredb')
const moment = require('moment')
const svgLaTeX = require('../services/svgLaTeX')
const { tunnel } = require('../qcloud')
const TunnelEvent = require('../services/tunnelEvent')
const uuidGenerator = require('uuid/v4')

/* ================================================================================ */

/**
 * 实现 onConnect 方法
 * 在信道连接建立以后会调用本方法
 */

function onConnect(tunnelId) {
  console.log(`[onConnect] =>`, { tunnelId })
}

/**
 * 实现 onClose 方法
 * 在连接被关闭（包括主动关闭和被动关闭）以后会调用本方法
 * 此时可以进行清理及通知操作
 */

function onClose(tunnelId) {
  console.log(`[onClose] =>`, { tunnelId })
  tunnel.closeTunnel(tunnelId)
}

/**
 * 实现 onMessage 方法
 * 客户端推送消息到信道服务器以后会调用本方法，此时可以处理信道消息
 */

async function onMessage(tunnelId, type, content) {
  console.log(`[onMessage] =>`, { tunnelId, type, content })
  switch (type) {
    case TunnelEvent.PARSE_NOTE_TEXT_REQ:
      const note = content.note
      try {
        note.noteImageData = await svgLaTeX(note.noteText)
        const res = {
          noteId: uuidGenerator(),
          noteText: note.noteText,
          blocks: JSON.stringify(note.blocks),
          cursorId: note.cursorId,
          noteImageData: JSON.stringify(note.noteImageData),
          createTime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        await coredb('note').insert(res)
        tunnel.broadcast([tunnelId], TunnelEvent.PARSE_NOTE_TEXT_RES, res)
      } catch (e) {
        const res = {
          stderr: e.stderr
        }
        tunnel.broadcast([tunnelId], TunnelEvent.PARSE_NOTE_TEXT_RES, res)
      }
      break
    default:
      break
  }
}

/* ================================================================================ */

module.exports = {

  /*
   * 响应客户端的信道连接请求，信道服务器连接成功以后通知客户端
   */

  get: async ctx => {
    const data = await tunnel.getTunnelUrl(ctx.req)
    const tunnelInfo = data.tunnel
    console.log(`get tunnel: `, tunnelInfo)
    ctx.state.data = tunnelInfo
  },

  /*
   * 处理信道传递过来的消息
   */

  post: async ctx => {
    // 当用户发送消息到信道上时，使用 onTunnelMessage 处理信道上的消息
    const packet = await tunnel.onTunnelMessage(ctx.request.body)
    switch (packet.type) {
      case 'connect':
        onConnect(packet.tunnelId)
        break
      case 'close':
        onClose(packet.tunnelId)
        break
      case 'message':
        onMessage(packet.tunnelId, packet.content.messageType, packet.content.messageContent)
        break
    }
  }

}
