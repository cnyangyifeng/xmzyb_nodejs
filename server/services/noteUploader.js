const configs = require('../config')
const CosSdk = require('cos-nodejs-sdk-v5')
const shortid = require('shortid')
const fs = require('fs')

const regionMap = {
  'ap-beijing-1': 'tj',
  'ap-beijing': 'bj',
  'ap-shanghai': 'sh',
  'ap-guangzhou': 'gz',
  'ap-chengdu': 'cd',
  'ap-singapore': 'sgp',
  'ap-hongkong': 'hk',
  'na-toronto': 'ca',
  'eu-frankfurt': 'ger'
}

/**
 * 上传图片至 cos
 * 
 * @param {String} imagePath
 * @return {Promise} 上传图片的 Promise 对象
 */
module.exports = (imagePath) => {
  // 初始化 cos sdk
  const cos = new CosSdk({
    SecretId: configs.qcloudSecretId,
    SecretKey: configs.qcloudSecretKey,
    Domain: `http://${configs.cos.fileBucket}-${configs.qcloudAppId}.cos.${configs.cos.region}.myqcloud.com/`
  })
  const imgKey = `${Date.now()}-${shortid.generate()}.svg`
  const uploadFolder = configs.cos.uploadFolder ? configs.cos.uploadFolder + '/' : ''
  const imageSize = fs.statSync(imagePath).size
  const params = {
    Bucket: `${configs.cos.fileBucket}-${configs.qcloudAppId}`,
    Region: configs.cos.region,
    Key: `${uploadFolder}${imgKey}`,
    Body: fs.createReadStream(imagePath),
    ContentLength: imageSize
  }
  // 返回 Promise 对象
  return new Promise((resolve, reject) => {
    // 检查 bucket 是否存在，不存在则创建 bucket
    cos.getService(params, (err, data) => {
      if (err) {
        reject(err)
        // 删除已上传的文件
        // fs.unlink(imagePath)
      }
      // 检查 bucket 是否存在
      const hasBucket = data.Buckets && data.Buckets.reduce((pre, cur) => {
        return pre || cur.Name === `${configs.cos.fileBucket}-${configs.qcloudAppId}`
      }, false)
      if (data.Buckets && !hasBucket) {
        cos.putBucket({
          Bucket: `${configs.cos.fileBucket}-${configs.qcloudAppId}`,
          Region: configs.cos.region,
          ACL: 'public-read'
        }, function (err, data) {
          if (err) {
            reject(err)
            // 删除已上传的文件
            // fs.unlink(imagePath)
          } else {
            resolve()
          }
        })
      } else {
        resolve()
      }
    })
  }).then(() => {
    // 返回 Promise 对象
    return new Promise((resolve, reject) => {
      // 上传图片
      cos.putObject(params, (err, data) => {
        if (err) {
          reject(err)
          // 删除已上传的文件
          // fs.unlink(imagePath)
        }
        resolve({
          imgUrl: `http://${configs.cos.fileBucket}-${configs.qcloudAppId}.cos${regionMap[configs.cos.region]}.myqcloud.com/${uploadFolder}${imgKey}`,
          size: imageSize,
          mimeType: 'image/svg+xml',
          name: imgKey,
          fileBucket: `${configs.cos.fileBucket}-${configs.qcloudAppId}`,
          qcloudAppId: configs.qcloudAppId,
          region: configs.cos.region,
          uploadFolder,
          imgKey
        })
        // 删除已上传的文件
        // fs.unlink(imagePath)
      })
    })
  })
}
