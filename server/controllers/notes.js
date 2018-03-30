const coredb = require('../services/coredb')

/* ================================================================================ */

async function getNote(ctx, next) {
  const noteId = ctx.params.note_id
  ctx.state.data =
    await coredb('note')
      .first()
      .where('noteId', noteId)
}

/* ================================================================================ */

module.exports = {
  getNote
}
