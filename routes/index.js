const express = require('express');
const router = express.Router();

// 这是在根路径 响应get请求...
router.get('/', (req, res) => {
  // res.send('Hello World')
  res.render('index')
})

module.exports = router;