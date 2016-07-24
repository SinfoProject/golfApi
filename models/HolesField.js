module.exports = function (sequelize, DataTypes){
	return sequelize.define('holesField',{
		hole : { type: DataTypes.INTEGER },
		par : { type: DataTypes.INTEGER }
	},{
		freezeTableName: true,
		timestamps: false
	});
};