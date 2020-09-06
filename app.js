const express = require('express')
const vhost = require('vhost')
Object.defineProperty(global, '_', {value: require('lodash')}) // import lodash globally

// main-app
const app = express()

// sub-app
const api = require('./api/app')
const admin = require('./admin/app')
const h5 = require('./h5/app')

app.use(vhost('admin.example.local', admin))

app.use(vhost('api.example.local', api))

app.use(vhost('www.example.local', h5))
app.use(vhost('example.local', h5))

app.use(function (req, res) {
  console.error('404 in main app')
  res.status(404).send('Not Found')
})

module.exports = app