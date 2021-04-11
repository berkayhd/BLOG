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

app.get('/', function (req, res) {
    res.render('site/index')
})

app.get('/index', function (req, res) {
    res.render('site/index')
})

app.get('/about', function (req, res) {
    res.render('site/about')
})

app.get('/blog', function (req, res) {
    res.render('site/blog')
})

app.get('/contact', function (req, res) {
    res.render('site/contact')
})

app.get('/login', function (req, res) {
    res.render('site/login')
})

app.get('/register', function (req, res) {
    res.render('site/register')
}
)
app.get('*', function (req, res) {
    res.status(404).send('Not Found')
})




app.listen(port,hostname, () => {
  console.log(`Server Çalışıyor, http://${hostname}:${port}`)
})




