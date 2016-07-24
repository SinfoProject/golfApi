module.exports = function (sequelize, DataTypes){
	return sequelize.define('field',{
		name : { type: DataTypes.STRING },
		nHoles : { type: DataTypes.INTEGER }
	},{
		freezeTableName: true,
		timestamps: false
	});
};