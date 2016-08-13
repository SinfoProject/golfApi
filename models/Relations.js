module.exports = function (){
	
	var sequelize = require('../database');
	// Descomentar la siguiente linea para crear la estructura de la base de datos, despues de que la estructura se haya creado por primera vez, volver a comentar la linea, ya que cada vez que se ejecute la aplicacion la base de datos se volvera a crear, eliminando los datos existentes.
	//sequelize.sync({force: true});

	var 
	Field   	= sequelize.import('./Field'),
	Player   	= sequelize.import('./Player'),
	Game   		= sequelize.import('./Game'),
	Team   		= sequelize.import('./Team'),
	HolesField  = sequelize.import('./HolesField'),
	HolesPlayer = sequelize.import('./HolesPlayer'),
	User 		= sequelize.import('./User');


	Game.belongsTo( Field, { onDelete: 'NO ACTION' } );
	Game.belongsTo( Team, {as:'winnerTeam',onDelete: 'NO ACTION'} );
	Game.hasMany( Player, { onDelete: 'NO ACTION' } );

	Player.belongsTo( Game, { onDelete: 'NO ACTION' } );
	Player.belongsTo( Team, { onDelete: 'NO ACTION' } );
	Player.hasMany( HolesPlayer );

	Field.hasMany( HolesField );

	HolesField.belongsTo( Field, { onDelete: 'cascade' } );
	HolesPlayer.belongsTo( Player, { onDelete: 'cascade' } );
	
}