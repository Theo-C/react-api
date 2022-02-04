const express = require('express')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db_eit', { useNewUrlParser: true })
mongoose.connection.on('open', () => {
  console.log('Je suis connecté à ma base Mongo DB')
})

const Produits = require('./Models/produits.model')

server.use(cors())
server.use(bodyParser.json())

server.get('/produits', function (req, res) {})
server.post('/produits', async (req, res) => {
  const elem = req.body
  const infos = await Produits.create(elem)
  const status = infos._id ? 201 : 400
  res.writeHead(status)
  res.end()
})
server.listen(3100)
