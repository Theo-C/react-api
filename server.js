const express = require('express')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const Films = require('./Models/films.model')

server.use(cors())
server.use(bodyParser.json())

server.get('/films', async function (req, res) {
  const infos = await Films.find()
  res.json(infos)
})

server.get('/films/:id', async function (req, res) {
  const { id } = req.params
  const infos = await Films.findOne({ _id: id })
  console.log(infos)
  res.json(infos)
})

server.get('/films/:genre/:dureemin/:dureemax', async function (req, res) {
  const { genre } = req.params
  const { dureemin } = req.params
  const { dureemax } = req.params
  const infos = await Films.find({
    genre: { $regex: genre },
    duration: { $gt: dureemin, $lt: dureemax },
  })
  console.log(infos)
  res.json(infos)
})

server.post('/films', async (req, res) => {
  const test = {
    _id: (await Films.find().count()) + 1,
    title: req.body.title,
    duration: req.body.duration,
    genre: req.body.genre,
    director: req.body.director,
    year: req.body.year,
    img: req.body.img,
  }
  const infos = await Films.create(test)
  //const status = infos._id ? 201 : 400
  //res.writeHead(status)
  res.end()
})

server.put('/films/:id', async (req, res) => {
  const { id } = req.params
  const elem = req.body

  const titre = elem.title
  const durée = elem.duration
  const genre = elem.genre
  const director = elem.director
  const year = elem.year
  const img = elem.img

  const infos = await Films.update(
    { _id: id },
    {
      $set: {
        title: titre,
        duration: durée,
        genre: genre,
        director: director,
        year: year,
        img: img,
      },
    }
  )
  console.log(infos)
  res.writeHead(200)
  res.end()
})

server.delete('/films/:id', async (req, res) => {
  const { id } = req.params
  const infos = await Films.deleteOne({ _id: id })
  console.log(infos)
  res.writeHead(200)
  res.end()
})

server.listen(3100)
