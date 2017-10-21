function config(){
  this.serverIP = function(){
    return '165.227.116.43';
  }
  this.dbUser = function(){
    return 'admin';
  }
  this.dbPass = function(){
    return 'SecureP@ssw0rd1';
  }
  this.dbName = function(){
      return 'tour_db';
  }
  this.port = function(){
      return '3000';
  }
}
module.exports = config;
