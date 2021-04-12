const mongoose = require('mongoose');

const Post = require('./models/post')

 mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

/* Post.findByIdAndDelete('60743c1d08d40003e46ddd18', (error, post)=>{
    console.log(error, PopStateEvent)
}) */

/* Post.findByIdAndUpdate('60743b5efe5c82301855f959',{
    title:"benim değiştirilmiş ilk başlığım"
},(error, post)=>{
    console.log(error, post)
}) */

/* Post.find({},(error, post)=>{
    console.log(error, post)
}) */

/* Post.create({
    title:  'İkinci post başlığım',
    content: 'İkinci yazım,Lorem İpsum '
},(error, post) => {
    console.log(error, post);
}) */