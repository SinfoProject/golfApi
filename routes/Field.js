/*
	Field Contrat
*/
var 
async 		= require('async'),
sequelize	= require('../database'),
Field  		= sequelize.import('../models/Field'),
HolesField  		= sequelize.import('../models/HolesField');

module.exports = function(app){
	
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
		var holes = {
			h1 : data.h1, h2 : data.h2, h3 : data.h3, h4 : data.h4, h5 : data.h5,
			h6 : data.h6, h7 : data.h7, h8 : data.h8, h9 : data.h9, h10 : data.h10,
			h11 : data.h11, h12 : data.h12, h13 : data.h13, h14 : data.h14, h15 : data.h15,
			h16 : data.h16, h17 : data.h17, h18 : data.h18
		}

		Field.update(field,{
			where : {
				id : fieldId
			}
		}).then(function (fieldRes){
			Field.findById(fieldId).then(function (fieldFinded){
				HolesField.update(holes,{
					where : {
						id : fieldFinded.holesFieldId
					}
				}).then(function (holesRes){
					res.json(fieldFinded);
				});
			});
		});
	});
	app.delete('/field/:fieldId',function (req,res){
		var fieldId = req.params.fieldId;
		Field.findById(fieldId).then(function (fieldRes){
			Field.destroy({
				where : {
					id : fieldId
				}
			}).then(function (rows){
				if(rows == 1){
					HolesField.destroy({
						where : {
							id : fieldRes.holesFieldId
						}
					}).then(function (holesRes){
						res.json(holesRes);
					});
				}
			});
		});
	});

}