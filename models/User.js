module.exports = function (sequelize, DataTypes){
	return sequelize.define('user',{
		name : { type: DataTypes.STRING },
		name : { type: DataTypes.STRING }
	},{
		freezeTableName: true,
		timestamps: false
	});
};