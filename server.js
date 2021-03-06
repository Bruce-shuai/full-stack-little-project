if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// 利用了MVC准则...
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'))

const mongoose = require('mongoose');
// process.env 到底是何许人物？？！！
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser:true
});
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter);

app.listen(process.env.PORT || 3001)