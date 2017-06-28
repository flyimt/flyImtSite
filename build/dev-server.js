var express = require('express')
var path = require('path')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')
var config = require('../config')

var port = process.env.PORT || config.dev.port
var proxyTable = config.dev.proxyTable

var app = express()

Object.keys(proxyTable).forEach((context) => {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(context, options))
})

app.set('views', '/src/view')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static('/src/asset'))

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app.listen(port, () => {
  console.log('启动')
  opn('http://127.0.0.1:' + port)
})
