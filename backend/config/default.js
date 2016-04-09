module.exports = {
  resources: {
    maxAge: 0
  },
  logging: {
    xResponseTime: true,
    requestsTime: true
  },
  newRelic: {
    enabled: false,
    name: '',
    key: '',
    level: 'info'
  },
  rateLimit: {
    enabled: true,
    duration: 1000 * 60 * 60 * 1,
    whiteList: ['127.0.0.1'],
    blackList: [],
    max: 500
  },
  server: {
    port: 3000
  }
}
