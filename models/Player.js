module.exports = function (sequelize, DataTypes){
	return sequelize.define('player',{
		name : { type: DataTypes.STRING }
	},{
		freezeTableName: true,
		timestamps: false
	});
};
