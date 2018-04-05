const configs = require('../config')
const crypto = require('crypto')
const moment = require('moment')
const parseString = require('xml2js').parseString;
const request = require('request')

/* ================================================================================ */

async function placeOrder(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    // 准备参数
    const appid = configs.appId
    const body = '科学公式打赏'
    const mch_id = '1494554932'
    const nonce_str = Math.random().toString(36).substr(2)
    const notify_url = 'https://xmzyb.xiongmaozuoye.club/api/wxpay'
    const openid = ctx.state.$wxInfo.userinfo.openId
    const out_trade_no = moment().format('YYYYMMDDHHmmssSSS')
    const spbill_create_ip = ctx.ip.replace(/::ffff:/, '')
    const total_fee = 990
    // 组装数据
    let orderReqData = '<xml>' +
      '<appid>' + appid + '</appid>' +
      '<body>' + body + '</body>' +
      '<mch_id>' + mch_id + '</mch_id>' +
      '<nonce_str>' + nonce_str + '</nonce_str>' +
      '<notify_url>' + notify_url + '</notify_url>' +
      '<openid>' + openid + '</openid>' +
      '<out_trade_no>' + out_trade_no + '</out_trade_no>' +
      '<sign_type>' + 'MD5' + '</sign_type>' +
      '<spbill_create_ip>' + spbill_create_ip + '</spbill_create_ip>' +
      '<total_fee>' + total_fee + '</total_fee>' +
      '<trade_type>' + 'JSAPI' + '</trade_type>'
    // 准备统一下单签名
    const api_key = 'gvid39p7a0lcb2awccaz2rx098j4ktgm'
    const raw_order_sign =
      'appid=' + appid + '&' +
      'body=' + body + '&' +
      'mch_id=' + mch_id + '&' +
      'nonce_str=' + nonce_str + '&' +
      'notify_url=' + notify_url + '&' +
      'openid=' + openid + '&' +
      'out_trade_no=' + out_trade_no + '&' +
      'sign_type=' + 'MD5' + '&' +
      'spbill_create_ip=' + spbill_create_ip + '&' +
      'total_fee=' + total_fee + '&' +
      'trade_type=' + 'JSAPI' + '&' +
      'key=' + api_key
    const md5_order_sign = crypto.createHash('md5').update(raw_order_sign).digest('hex')
    const order_sign = md5_order_sign.toUpperCase()
    // 继续组装数据
    orderReqData += '<sign>' + order_sign + '</sign>'
    orderReqData += '</xml>'
    ctx.state.data = await requestWxpayServer(orderReqData, appid, api_key)
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

function requestWxpayServer(orderReqData, appid, api_key) {
  return new Promise((resolve, reject) => {
    // 请求微信支付统一下单接口
    const url = 'https://api.mch.weixin.qq.com/pay/unifiedorder'
    request({
      url: url,
      method: 'POST',
      body: orderReqData
    }, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        parseString(body, (err, res) => {
          console.log(`微信支付统一下单接口返回内容：`, body)
          // 准备参数
          const pack = 'prepay_id=' + res.xml.prepay_id
          const nonce_str = res.xml.nonce_str[0]
          const timeStamp = Math.floor(new Date().getTime() / 1000)
          // 准备微信支付签名
          const raw_pay_sign =
            'appId=' + appid + '&' +
            'nonceStr=' + nonce_str + '&' +
            'package=' + pack + '&' +
            'signType=' + 'MD5' + '&' +
            'timeStamp=' + timeStamp + '&' +
            'key=' + api_key
          const md5_pay_sign = crypto.createHash('md5').update(raw_pay_sign).digest('hex')
          const pay_sign = md5_pay_sign.toUpperCase()
          // 组装数据
          resolve({
            nonceStr: nonce_str,
            'package': pack,
            paySign: pay_sign,
            signType: 'MD5',
            timeStamp: timeStamp.toString()
          })
        })
      }
    })
  })
}

/* ================================================================================ */

module.exports = {
  placeOrder
}
