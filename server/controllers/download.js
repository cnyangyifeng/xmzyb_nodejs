const send = require('koa-send')

module.exports = async ctx => {
  ctx.state.data = await send(ctx, ctx.path, { root: '/tmp/pnglatex' })
}
