var express = require('express');
var mysql   = require('mysql');
var router = express.Router();

router.get('/:id', function(req,res){
  var connection = mysql.createConnection({
    host     : cfg.serverIP(),
    user     : cfg.dbUser(),
    password : cfg.dbPass(),
    database : cfg.dbName()
  });

  id = req.params.id;

  connection.connect();

  connection.query("SELECT Tour_Info.Date, Tour_Info.Rate, Tour_Info.Tour_Name, Tour_Info.Tour_Desc, Users.Username FROM Users, Tour_Info, Tours WHERE Tour_Info.Tour_Id = Tours.Tour_Id AND Tours.User_Id = Users.User_Id AND Tour_Info.Tour_Id = " + id, function (error, results, fields) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    if(error == null){
      res.send(results);
    }
    else{
      res.send(error);
    }
  });

connection.end();
});

module.exports = router;
