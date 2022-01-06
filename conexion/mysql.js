const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'juego'
})

//Variables hipoteticas con los datos del jugador
var nombreJugador = "Jugador";
var puntajeJugador = 1000;
var dineroJugador = 7050;
/*
//Constante para almacenar la cadena SQL de inserción
const insertar = `INSERT INTO JUGADOR VALUES ('${nombreJugador}',${puntajeJugador},${dineroJugador})`;

// Constante para almacenar la cadena SQL de Consulta ordenada por puntaje descendente




//Método para Insertar en la Base de datos
connection.query(insertar, (err,rows) =>{
   if(err) throw err;
   console.log(rows);
})
*/
const consultar = 'SELECT * FROM JUGADOR ORDER BY puntaje DESC';

//Método para consultar los jugadores y ordenarlos de mayor a menor puntaje
connection.query(consultar, (err, rows) =>{ 
   if(err) throw err;
   console.log(rows); 
})


connection.end();
