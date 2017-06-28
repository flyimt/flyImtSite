var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('yyui/introduction')
})

router.get('/introduction', (req, res) => {
  res.render('yyui/introduction')
})

router.get('/start', (req, res) => {
  res.render('yyui/start')
})

router.get('/global', (req, res) => {
  res.render('yyui/global')
})

router.get('/plugins', (req, res) => {
  res.render('yyui/plugins')
})

router.get('/components', (req, res) => {
  res.render('yyui/components')
})

module.exports = router
