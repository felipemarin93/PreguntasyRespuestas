//@ts-check
import { preguntas } from "./Ronda.js";
import { Quiz } from './Quiz.js';

import { Pregunta } from "./Pregunta.js";
import { preguntasNivel5 } from "./Constantes.js";

function main (){
    const quiz = new Quiz(preguntas);

    const question = new Pregunta()

    question.mostrarPreguntaNivel1()
}

main();

