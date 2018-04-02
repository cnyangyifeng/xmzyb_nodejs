const { uploader } = require('../qcloud')
const coredb = require('../services/coredb')
const moment = require('moment')
const uuidGenerator = require('uuid/v4')

/* ================================================================================ */

async function getTutor(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const tutorInfo = ctx.state.$wxInfo.userinfo
    const tutor =
      await coredb('tutor')
        .first()
        .where('tutorId', tutorInfo.openId)
    if (tutor === undefined) {
      tutor = await createDefaultTutor(tutorInfo)
    }
    ctx.state.data = tutor
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

/**
 * 创建一条默认的 tutor 数据
 */

async function createDefaultTutor(tutorInfo) {
  const tutorId = tutorInfo.openId
  const createTime = moment().format('YYYY-MM-DD HH:mm:ss')
  const lastVisitTime = createTime
  await coredb('tutor')
    .insert({
      tutorId: tutorId,
      tutorInfo: JSON.stringify(tutorInfo),
      createTime: createTime,
      lastVisitTime: lastVisitTime
    })
  return await coredb('tutor')
    .first()
    .where('tutorId', tutorId)
}

/* ================================================================================ */

module.exports = {
  getTutor
}
