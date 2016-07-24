// /*
// 	Game Contrat
// */
var 
sequelize	= require('../database'),
Game  		= sequelize.import('../models/Game'),
Player  	= sequelize.import('../models/Player'),
Field  		= sequelize.import('../models/Field'),
HolesPlayer = sequelize.import('../models/HolesPlayer');

module.exports = function(app){
	app.post('/game',function (req,res){
		var data = req.body;
		Game.create(data).then(function (gameRes){
			res.json(gameRes);
		});
	});
	app.get('/game',function (req,res){
		Game.findAll().then(function (gameRes){
			res.json(gameRes);
		});
	});

	app.get('/game/:gameId',function (req,res){
		var gameId = req.params.gameId;
		Game.findById(
			gameId,
			{
				include:
				{
					model:Player,
					include:HolesPlayer
				}
			}).then(function (gameRes){
				Field.findById(gameRes.fieldId).then( function (fieldRes){
					gameRes.dataValues.nHoles = fieldRes.nHoles;
					res.json(gameRes);
				});
		});
	});

	// app.get('/game/:gameId/leaderboard',function (req,res){});
	app.put('/game/:gameId',function (req,res){
		var gameId = req.params.gameId;
		var data = req.body;
		var game = {
			name 			: data.name,
			type 			: data.type,
			fieldId 		: data.fieldId,
			winnerId 		: data.winnerId,
			winnerTeamId	: data.winnerTeamId
		}
		Game.update(game,{
			where: {
				id: gameId
			}
		}).then(function (gameRes){
			res.json(gameRes);
		});
	});
	app.delete('/game/:gameId',function (req,res){
		var gameId = req.params.gameId;
		Game.destroy({
			where: {
				id: gameId
			}
		}).then(function (gameRes){
			res.json(gameRes);
		});
	});
}