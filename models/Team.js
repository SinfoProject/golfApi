module.exports = function (sequelize, DataTypes){
	return sequelize.define('team',{
		name : { type: DataTypes.STRING }
	},{
		freezeTableName: true,
		timestamps: false
	});
};
