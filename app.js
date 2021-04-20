const express = require('express')
var exphbs  = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }));
 
 app.use(express.json())

const main = require('./routes/main')
app.use('/', main)
const posts = require('./routes/posts')
app.use('/posts', posts)




app.listen(port,hostname, () => {
  console.log(`Server Çalışıyor, http://${hostname}:${port}`)
})




