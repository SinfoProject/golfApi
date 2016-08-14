/*
	Field Contrat
*/
var 
async 		= require('async'),
sequelize	= require('../database'),
Field  		= sequelize.import('../models/Field'),
HolesField  = sequelize.import('../models/HolesField');

module.exports = function(app,io){
	app.post('/field',function (req,res){
		var data = req.body;
		var field = {
			name : data.name,
			nHoles : data.nHoles
		}
		var holes = new Array();
		for(var i = 1; i<=data.nHoles; i++){
			holes.push(i);
		}
		Field.create(field).then(function (record){
			async.each(holes, function (hole,callback){
				var holeObj = {
					fieldId : record.id,
					hole : hole
				}
				HolesField.create(holeObj).then(function (){
					callback();
				});
			});
			res.json(record);
		});
	});
	app.get('/field',function (req,res){
		Field.findAll({include:HolesField}).then(function (data){
			res.json(data);
		});
	});
	app.get('/field/:fieldId',function (req,res){
		var fieldId = req.params.fieldId;
		Field.findById(fieldId).then(function (field){
			res.json(field);
		});
	});
	app.put('/field/:fieldId',function (req,res){
		var fieldId = req.params.fieldId;
		var data = req.body;
		var field = {
			name : data.name,
			nHoles : data.nHoles
		}

		Field.update(field,{
			where : {
				id : fieldId
			}
		}).then(function (fieldRes){
			res.json(fieldRes);
		});
	});
	app.put('/field/:fieldId/holes',function (req,res){
		var fieldId = req.params.fieldId;
		var data = req.body
		async.forEachOf(data, function (hole,key,callback){
			var keyAux = key;
			keyAux++;
			console.log(keyAux);
			var holeObj = {
				par : hole
			}
			HolesField.update(holeObj,{
				where : {
					hole : keyAux
				}
			}).then(function (){
				callback();
			});
		});
		res.json();
	});
	app.delete('/field/:fieldId',function (req,res){
		var fieldId = req.params.fieldId;
		Field.findById(fieldId)
		.then(function (fieldRes){
			Field.destroy({
				where : {
					id : fieldId
				}
			})
			.then(function (rows){
				if(rows == 1){
					HolesField.destroy({
						where : {
							id : fieldRes.holesFieldId
						}
					}).then(function (holesRes){
						res.json(holesRes);
					})
				}
				res.json(rows);
			})
			.catch(function (err) {
				res.json({error:err});
			});
		});
	});

}