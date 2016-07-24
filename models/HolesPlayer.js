module.exports = function (sequelize, DataTypes){
	return sequelize.define('holesPlayer',{
		hole : { type: DataTypes.INTEGER },
		shot : { type: DataTypes.INTEGER },
		penalty : { type: DataTypes.INTEGER }
	},{
		freezeTableName: true,
		timestamps: false
	});
};
