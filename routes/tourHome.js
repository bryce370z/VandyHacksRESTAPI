var express = require('express');
var mysql   = require('mysql');
var router = express.Router();
var config = require('../config');

cfg = new config();

router.get('/', function(req,res){
  var connection = mysql.createConnection({
    host     : cfg.serverIP(),
    user     : cfg.dbUser(),
    password : cfg.dbPass(),
    database : cfg.dbName()
  });

  connection.connect();

  connection.query("SELECT Tour_Info.Tour_Id, Tour_Info.Tour_Name,Tour_Info.Tour_Desc,Tour_Info.Date,Tour_Info.Rate, Tour_Loc.Pic FROM Tour_Info, Tour_Loc WHERE Tour_Info.Tour_id=Tour_Loc.Tour_id AND Tour_Loc.Order=1", function (error, results, fields) {
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
