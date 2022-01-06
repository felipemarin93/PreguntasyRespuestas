const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'juego'
})
/*
 connection.query('SELECT * from jugador', (err, rows) =>{
    if(err) throw err
    console.log('Estos son los datos: ');
    console.log(rows);
*/


 

 //Variables hipoteticas con los datos del jugador
 var nombreJugador = "Mateo";
 var nombreJugadorEliminar = "Juanchito";
 var puntajeJugador = 1000;
 var dineroJugador = 7050;

 //Constante para almacenar la cadena SQL de inserción
 const insertar = `INSERT INTO JUGADOR VALUES ('${nombreJugador}',${puntajeJugador},${dineroJugador})`;

 // Constante para almacenar la cadena SQL de Consulta ordenada por puntaje descendente
 const consultar = 'SELECT * FROM JUGADOR ORDER BY puntaje DESC';

// Constante para almacenar la cadena SQL de eliminación de un jugador de la BD
 const eliminar = `DELETE FROM JUGADOR WHERE nombre = '${nombreJugadorEliminar}'`;

 //Método para Insertar en la Base de datos
 connection.query(insertar, (err,rows) =>{
    if(err) throw err;
 })

 //Método para consultar los jugadores y ordenarlos de mayor a menor puntaje
 connection.query(consultar, (err, rows) =>{ 
    if(err) throw err;
    console.log(rows); 
 })
//Método para eliminar un jugador
 connection.query(eliminar, (err, rows) =>{ 
    if(err) throw err;
    
 })
connection.end();