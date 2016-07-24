// /*
// 	Team Contrat
// */
var 
sequelize	= require('../database'),
Team  		= sequelize.import('../models/Team');

module.exports = function(app){

	app.post('/team',function (req,res){
		var data = req.body;
		Team.create(data).then(function (dataRes){
			res.json(dataRes);
		});
	});
	app.get('/team',function (req,res){
		Team.findAll().then(function (dataRes){
			res.json(dataRes);
		});
	});
	app.get('/team/:teamId',function (req,res){
		var teamId = req.params.teamId;
		Team.findById(teamId).then(function (dataRes){
			res.json(dataRes);
		});
	});
	app.put('/team/:teamId',function (req,res){
		var teamId = req.params.teamId;
		var data = req.body;
		Team.update(data,{
			where: {
				id: teamId
			}
		}).then(function (dataRes){
			res.json(dataRes);
		});
	});
	app.delete('/team/:teamId',function (req,res){
		var teamId = req.params.teamId;
		Team.destroy({
			where: {
				id: teamId
			}
		}).then(function (dataRes){
			res.json(dataRes);
		});
	});

}