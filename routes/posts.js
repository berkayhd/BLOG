const express = require('express')
const router = express.Router()
const Post = require('../models/post');

router.get('/new', function (req, res) {
    res.render('site/addpost')
})

router.post('/test', function (req, res) {
    Post.create(req.body)
    res.redirect('/')
})

module.exports = router