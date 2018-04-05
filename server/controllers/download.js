const send = require('koa-send')

module.exports = async (ctx, next) => {
  ctx.state.data = await send(ctx, ctx.path, { root: '/tmp/svglatex' })
}
