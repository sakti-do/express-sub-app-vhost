const express = require('express')
const vhost = require('vhost')

// main-app
const app = express()

// sub-app
const api = require('./api/app')
const admin = require('./admin/app')
const h5 = require('./h5/app')

app.use(vhost('admin.example.com', admin))
app.use(vhost('api.example.com', api))
app.use('/', h5)

module.exports = app
