var express = require('express');
var app = express();
var morgan = require('morgan');
app.use(morgan('short'));
app.use(function (req, res, next) {
  res.send('ok');
});
app.listen(3000, function () {
  console.log('listen on 3000')
});