module.exports = function (sequelize, DataTypes){
	return sequelize.define('user',{
		name : { type: DataTypes.STRING },
		pass : { type: DataTypes.STRING }
	},{
		freezeTableName: true,
		timestamps: false
	});
};