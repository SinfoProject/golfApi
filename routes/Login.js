var 
sequelize	= require('../database'),
User  		= sequelize.import('../models/User');

module.exports = function(app){
	app.post('/login',function (req,res){
		var data = req.body;
		var user = {
			name: data.name,
			pass: data.pass,
		}
		User.findOne(
		{
			where:
			{
				name:user.name,
				pass:user.pass
			}
		})
		.then(function(userRes)
		{
			res.json(userRes);
		});
	});
}