const mongoose = require('mongoose');

const Post = require('./models/post')

 mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

Post.create({
    title:  'benim ilk post başlığım',
    content: 'ilk içik yazım,lala lallalqwleqwl q w e'
},(error, post) => {
    console.log(error, post);
}
)