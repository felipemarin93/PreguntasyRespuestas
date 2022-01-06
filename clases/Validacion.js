import {mostrarPreguntaNivel2} from './Pregunta.js'
function miAlerta1() {
    let seleccionada = '1';
    console.log(seleccionada);
    validarRespuesta(seleccionada);
}

function miAlerta2() {
    let seleccionada = '2'; 
    console.log(seleccionada);
    validarRespuesta(seleccionada);
}

function miAlerta3() {
    let seleccionada = '3'; 
    console.log(seleccionada);
    validarRespuesta(seleccionada);
    mostrarPreguntaNivel2()
}

function miAlerta4() {
    let seleccionada = '4';
    console.log(seleccionada);
    validarRespuesta(seleccionada);
    
}

function validarRespuesta (respuesta){
    if (respuesta==='3'){
        alert('Has seleccionado la Respuesta correcta');
        
        
        mostrarPreguntaNivel2();

    } else{
        alert('Game over!! Has seleccionado la Respuesta incorrecta, no te llevas nada NO ENTRAS A SOFKA NI A LAS CANTERAS jejeje :D');
        
    }
}


