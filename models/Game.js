module.exports = function (sequelize, DataTypes){
	return sequelize.define('game',{
		name : { type: DataTypes.STRING },
		type : { type: DataTypes.ENUM('stroke','stableford','match') },
		winnerId : { type: DataTypes.INTEGER }
	},{
		freezeTableName: true,
		timestamps: false
	});
};
