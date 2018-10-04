var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Cdt@12345678'
});

connection.connect();

app.get('/banco', function(req, res) {
  connection.query('CREATE DATABASE IF NOT EXISTS corretoria_clientes', function(err, rows, fields) {
    if(err) throw err;
    connection.query('SHOW DATABASES', function(err, rows, fields) {
      if(err) throw err;
      console.log('Resultado: ', rows);
    });
  });
});

app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});