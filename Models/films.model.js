const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db_film', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('connecté à Mongoose')
})

const schema = mongoose.Schema({
  _id: Number,
  title: String,
  duration: Number,
  genre: String,
  director: String,
  year: Number,
  img: String,
})

module.exports = mongoose.model('films', schema)
