var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config();

// Mongoose setup
const mongoose = require('mongoose');


var empresaRouter = require('./routes/empresa');


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/empresa', empresaRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Conectado ao Banco de Dados");
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
})
.catch((err) => {console.log(err)});


module.exports = app;
