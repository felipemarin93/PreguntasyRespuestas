//@ts-check
import { preguntas } from "./Ronda.js";
import { Quiz } from './Quiz.js';
import { Pregunta } from "./Pregunta.js";
import { preguntasNivel1,preguntasNivel2,preguntasNivel3,preguntasNivel4,preguntasNivel5 } from "./Constantes.js";


function main (){
    
    
    window.alert("'Bienvenid@ al concurso de preguntas y Respuestas, a continuación le haremos unas preguntas, si respondes de manera correcta irás acumulando puntos y dinero. Si resuelves los 5 niveles te llevas el acumulado, pero si te equivocas pierdes todo;")
    var nombreJugador = prompt("Antes de Iniciar, Cuentame cual es tu nombre");
    
    const quiz = new Quiz(preguntas);
    const question = new Pregunta()
    
    //Primera Ronda
    question.mostrarPreguntaNivel1()
    


    
    
    
}


main();







