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
# Field
Accioens relacionadas con *Campos*
## GET 
* ### /field
Devuelve un `Array` con todos los registros de campos existentes.


* #### /field/:fieldId
Devuelve un campo con el ID especificado.

## POST
* ### /field
Crea un nuevo campo, y crea la canitdad de hoyos especificada para dicho campo.

#### Recibe
> - name => `STRING`
> - nHoles => `INTEGER`

```
{
	"name" : "MyField",
	"nHoles" : 18
}
```

## PUT
* ### /field/:fieldId
Actualiza los valores de los hoyos creados para el campo especificado.

#### Recibe
Working

## DELETE
* ### /field/:fieldId
Elimina el campo con el ID especificado.
---

# Game
Accioens relacionadas con *Juegos*
## GET 
* ### /game
Devuelve un `Array` con todos los registros de juegos existentes.


* #### /game/:gameId
Devuelve un juego con el ID especificado.

## POST
* ### /game
Crea un nuevo juego con los datos especificados

#### Recibe
> - name => `STRING`
> - type => `STRING`
> - field => `INTEGER`

```
{
	"name" : "Red vs Blue",
	"type" : "stroke",
	"field" : 1
}
```

## PUT
* ### /game/:gameId
Actualiza los valores de los hoyos creados para el campo especificado.

#### Recibe
Working

## DELETE
* ### /game/:gameId
Elimina el juego con el ID especificado.
