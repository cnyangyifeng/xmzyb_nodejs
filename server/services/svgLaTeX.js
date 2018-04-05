const util = require('util')
const exec = util.promisify(require('child_process').exec)
const sizeOf = require('image-size')

const noteUploader = require('../services/noteUploader')
const shortid = require('shortid')

module.exports = async note => {
  // 返回 Promise 对象
  console.log(`[svgLaTeX] note => ${note}`)
  // 对换行符 '\\' 全部转义替换为 '\\\\'
  note = note.replace(/\\/g, '\\\\')
  console.log(`note to parse: `, note)
  // 执行 svglatex 脚本
  const cmd = `svglatex -f "${note}"`
  try {
    const { stdout } = await exec(cmd)
    if (stdout) {
      const svgImagePath = stdout.trim()
      console.log(`[svgLaTeX] stdout => ${svgImagePath}`)
      const dimensions = sizeOf(svgImagePath)
      const { imgUrl } = await noteUploader(svgImagePath)
      const pngImageName = svgImagePath.substring(svgImagePath.lastIndexOf('/') + 1, svgImagePath.lastIndexOf('.')) + '.png'
      console.log(`pngImageName: `, pngImageName)
      return {
        imgUrl: imgUrl,
        pngImageName: pngImageName,
        dimensions: dimensions
      }
    }
  } catch (stderr) {
    console.log(`[svgLaTeX] stderr => ${stderr}`)
    throw stderr
  }
}
