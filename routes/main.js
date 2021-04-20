const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/', function (req, res) {
    res.render('site/index')
})

router.get('/index', function (req, res) {
    res.render('site/index')
})

router.get('/about', function (req, res) {
    res.render('site/about')
})

router.get('/blog', (req, res) => {
    Post.find({}).then(posts => {
      res.render('site/blog', {
        posts:posts.map(item => item.toJSON())
      });
    });
  });

router.get('/contact', function (req, res) {
    res.render('site/contact')
})

router.get('/login', function (req, res) {
    res.render('site/login')
})

router.get('/register', function (req, res) {
    res.render('site/register')
})

router.get('/posts/new', function (req, res) {
    res.render('site/addpost')
})

// router.get('*', function (req, res) {
//     res.status(404).send('Not Found')
// })



module.exports = router