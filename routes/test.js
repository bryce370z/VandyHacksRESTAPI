var express = require('express');
var mysql   = require('mysql');
var router = express.Router();

router.get('/', function(req,res){
  var connection = mysql.createConnection({
  host     : '165.227.116.43',
  user     : 'admin',
  password : 'SecureP@ssw0rd1',
  database : 'tour_db'
  });

  connection.connect();

  connection.query('SELECT * FROM Users', function (error, results, fields) {
    if(error == null){
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
      res.send(results);
    }
    else{
      res.send(error);
    }
  });

connection.end();
});

module.exports = router;
