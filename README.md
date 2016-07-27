# golfApi
API de administración de golf

## Instalación
Situarse en la raiz del proyecto y ejecutar `npm install` para instalar las dependencias necesarias de node. 

## Base de datos
Para crear la estructura de la base de datos por primera vez, descomentar la linea especificada en el archivo `/models/Relations.js`.
---

# REST API GolfAdministration
Documentación para la REST API de golf
---
# FIELD
Accioens relacionadas con *Campos*

## Get 
### /field
Devuelve un `Array` con todos los registros de campos existentes.

### /field/:fieldId
Devuelve un campo con el ID especificado.

## Post
### /field
Crea un nuevo campo, y crea la canitdad de hoyos especificada para dicho campo.

#### Recibe
> - name => `STRING`
> - nHoles => `INTEGER`

```
{
	"name"    : "MyField",
	"nHoles"  : 18
}
```

## Put
### /field/:fieldId
Actualiza los valores de los hoyos creados para el campo especificado.

#### Recibe
Working

## Delete
### /field/:fieldId
Elimina el campo con el ID especificado.

---

---

# GAME
Accioens relacionadas con *Juegos*
## Get 
### /game
Devuelve un `Array` con todos los registros de juegos existentes.


#### /game/:gameId
Devuelve un juego con el ID especificado.

## Post
### /game
Crea un nuevo juego con los datos especificados.

#### Recibe
> - name => `STRING`
> - type => `STRING`
> - field => `INTEGER`

```
{
	"name"    : "Red vs Blue",
	"type"    : "stroke",
	"fieldId" : 1
}
```

## Put
### /game/:gameId
Actualiza los valores del campo especificado.

#### Recibe
> - name => `STRING`
> - type => `STRING`
> - fieldId => `INTEGER`
> - winnerId => `INTEGER`
> - winnerTeamId => `INTEGER`

```
{
	name         : "Green vs Yellow",
	type         : "match",
	fieldId      : 2,
	winnerId     : 3,
	winnerTeamId : 1
}
```

## Delete
### /game/:gameId
Elimina el juego con el ID especificado.

---

---

# PLAYER
Accioens relacionadas con *Jugadores*
## Get 
### /player
Devuelve un `Array` con todos los registros de jugadores existentes.


#### /player/:playerId
Devuelve un jugador con el ID especificado.

## Post
### /player
Crea un nuevo jugador con los datos especificados Y crea los hoyos correspondientes segun el numero de hoyos disponibles en el campo.

#### Recibe
> - name => `STRING`
> - gameId => `INTEGER`
> - teamId => `INTEGER`

```
{
	name   : "Juan Perez",
	gameId : 4,
	teamId : 2
}
```

## Put
### /player/:playerId
Actualiza los valores del jugador con el ID seleccionado

#### Recibe
> - name => `STRING`
> - gameId => `INTEGER`
> - teamId => `INTEGER`

```
{
	name   : "Luis Perez",
	gameId : 3,
	teamId : 1
}
```

### /player/:playerId/hole
Actualiza los valores del hoyo especificado del jugador designado por playerId

#### Recibe
> - "h + holeNumber" => `STRING`
> - shot => `INTEGER`
> - penalty => `INTEGER`

```
{
	"hole"    : 1,
	"shot"    : 3,
	"penalty" : 1
}
```

## Delete
### /player/:playerId
Elimina el jugador con el ID especificado.

---

---

# TEAM
Accioens relacionadas con *Equipos*
## Get 
### /team
Devuelve un `Array` con todos los registros de equipos existentes.


#### /team/:teamId
Devuelve un equipo con el ID especificado.

## Post
### /team
Crea un nuevo equipo con el nombre especificados.

#### Recibe
> - name	=> `STRING`

```
{
	"name" : "Read Team"
}
```

## Put
### /team/:teamId
Actualiza el nombre del equipo con el ID especificado.
#### Recibe
> - name	=> `STRING`

```
{
	"name" : "Read Team"
}
```

## Delete
### /team/:teamId
Elimina el equipo con el ID especificado.
