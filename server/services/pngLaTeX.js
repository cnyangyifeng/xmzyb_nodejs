const util = require('util')
const exec = util.promisify(require('child_process').exec)
const sizeOf = require('image-size')

const noteUploader = require('../services/noteUploader')
const shortid = require('shortid')

/**
 * pnglatex
 *   -b <color> Set the background color
 *   -B <color> Set the border color
 *   -d <dpi> Set the output resolution to the specified dpi
 *   -e <environment> Set the environment for the note (i.e. displaymath or eqnarray)
 *   -f <note> The LaTeX note
 *   -F <color> Set the foreground color
 *   -h Print the help message
 *   -H <header> Input file in header
 *   -m <margin> Set the margin
 *   -M Strip meta information
 *   -o <file> Specify the output file name
 *   -O Optimize the image
 *   -p <packages> A colon separated list of LaTeX package names
 *   -P <padding> Set the padding
 *   -r <file> Read an image and print the LaTeX note
 *   -s <size> Set the font size
 *   -S Don't print image file name
 *   -v Show version
 */
module.exports = async note => {
  // 返回 Promise 对象
  console.log(`[pngLaTeX] note => ${note}`)
  const cmd = `pnglatex -d 400 -e align* -f "${note}" -O -P 10 -p amsfonts:amsmath:mhchem`
  try {
    const { stdout } = await exec(cmd)
    if (stdout) {
      const tempImagePath = stdout.trim()
      console.log(`[pngLaTeX] stdout => ${tempImagePath}`)
      const dimensions = sizeOf(tempImagePath)
      const { imgUrl } = await noteUploader(tempImagePath)
      const paths = tempImagePath.split('/')
      return {
        imgUrl: imgUrl,
        tempFileName: paths[paths.length - 1],
        dimensions: dimensions
      }
    }
  } catch (stderr) {
    console.log(`[pngLaTeX] stderr => ${stderr}`)
    return stderr
  }
}
