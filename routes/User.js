// /*
// 	User Contrat
// */
var 
sequelize	= require('../database'),
User  		= sequelize.import('../models/User');

module.exports = function(app){

	app.post('/user',function (req,res){
		var data = req.body;
		var user = {
			name: data.name,
			pass: data.pass,
		}
		User.create(user).then(function (userRes){
			res.json(userRes);
		});
	});
	app.get('/user',function (req,res){
		User.findAll().then(function (userRes){
			res.json(userRes);
		});
	});
	app.get('/user/:userId',function (req,res){
		var userId = req.params.userId;
		User.findById(userId).then(function (userRes){
			res.json(userRes);
		});
	});
}