const configs = {
  serverHost: 'xmzyb.xiongmaozuoye.club',
  authServerUrl: 'http://10.186.29.31/mina_auth',
  tunnelServerUrl: 'https://85585684.ws.qcloud.la',
  tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
  qcloudAppId: '1256150559',
  qcloudSecretId: 'AKIDQlvvnUeMadVHtKzigT5au31nPp483jPu',
  qcloudSecretKey: 'SkrnY8XltqcDdt1yjJjy2vdAWhiYEj3B',
  port: '80',
  rootPathname: '',
  appId: 'wx209872c785d7715b',
  appSecret: '105b3bd77f191fe812db1731e4633866',
  useQcloudLogin: true,
  mysql: {
    host: '10.186.29.31', // prod
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: '2018^xmzy', // prod
    char: 'utf8mb4'
  },
  coredb: {
    host: '10.186.29.31', // prod
    port: 3306,
    user: 'root',
    db: 'xmzyb_core_db',
    pass: '2018^xmzy', // prod
    char: 'utf8mb4'
  },
  cos: {
    region: 'ap-guangzhou',
    fileBucket: 'xmzyb',
    uploadFolder: 'user_data'
  },
  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'xmzyb'
}

module.exports = configs
