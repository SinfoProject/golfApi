// /*
// 	Player Contrat
// */
var 
async 		= require('async'),
sequelize	= require('../database'),
Field  		= sequelize.import('../models/Field'),
Game  		= sequelize.import('../models/Game'),
Player  	= sequelize.import('../models/Player'),
HolesPlayer = sequelize.import('../models/HolesPlayer');

module.exports = function(app){

	app.post('/player',function (req,res){
		var data = req.body;
		var player = {
			name: data.name,
			gameId: data.gameId,
			teamId: data.teamId
		}
		Player.create(player).then(function (playerRes){

			Game.findById(playerRes.gameId).then(function (gameRes){
				Field.findById(gameRes.fieldId).then(function (fieldRes){
					var holes = new Array();
					for(var i = 1; i<=fieldRes.nHoles; i++){
						holes.push(i);
					}
					async.each(holes, function (hole,callback){
						var holeObj = {
							playerId : playerRes.id,
							hole : hole
						}
						HolesPlayer.create(holeObj).then(function (){
							callback('hole');
						});
					});
					res.json(playerRes);
				});
			});
		});
	});
	app.get('/player',function (req,res){
		Player.findAll({include:HolesPlayer}).then(function (dataRes){
			res.json(dataRes);
		});
	});
	app.get('/player/:playerId',function (req,res){
		var playerId = req.params.playerId;
		Player.findById(playerId,{include:HolesPlayer}).then(function (dataRes){
			res.json(dataRes);
		});
	});
	app.put('/player/:playerId',function (req,res){
		var playerId = req.params.playerId;
		var data = req.body;
		var player = {
			name : data.name,
			gameId: data.gameId,
			teamId: data.teamId
		}
		Player.update(player,{
			where : {
				id : playerId
			}
		}).then(function (playerRes){
			res.json(playerRes);
		});	
	});
	app.put('/player/:playerId/hole',function (req,res){
		var playerId = req.params.playerId;
		Player.findById(playerId).then(function (playerRes){
			var data = req.body;
			var holes = {
				shot : data.shot,
				penalty : data.penalty
			}
			HolesPlayer.update(holes,{
				where : {
					playerId : playerRes.id,
					hole : data.hole
				}
			}).then(function (holesRes){
				res.json(holesRes);
			});
		});
	});
	app.delete('/player/:playerId',function (req,res){
		var playerId = req.params.playerId;
		Player.findById(playerId).then(function (dataRes){
			Player.destroy({
				where : {
					id : playerId
				}
			}).then(function (rows){
				if(rows == 1){
					HolesPlayer.destroy({
						where : {
							id : dataRes.holesPlayer
						}
					}).then(function (holesRes){
						res.json(holesRes);
					});
				}
			});
		});
	});
}