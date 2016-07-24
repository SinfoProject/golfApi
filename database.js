var Sequelize = require('sequelize');

var dbName = 'dbName';
var user = 'user';
var pass = 'pass';

var sequelize = new Sequelize(dbName,user,pass,{'host':'localhost','dialect':'mysql'});
module.exports = sequelize;