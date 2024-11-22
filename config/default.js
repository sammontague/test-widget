const pjson = require('../package.json')

module.exports = {
  server: {
    httpPort: 8080,
    httpsPort: 8443
  },
  logOptions: {
    level: 'debug',
    appname: pjson.name
  }
}
