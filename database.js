var Sequelize = require('sequelize');

var dbName = 'golfDB';
var user = 'root';
var pass = '';

var sequelize = new Sequelize(dbName,user,pass,{'host':'localhost','dialect':'mysql'});
module.exports = sequelize;