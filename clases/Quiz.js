// @ts-check

import {Pregunta} from './Pregunta.js';

export class Quiz {

    indicePregunta = 0;
    puntajeJugador = 0;

    /**
     * 
     * @param {Pregunta[]} preguntas 
     */

    constructor(preguntas) {
        this.preguntas = preguntas;
    }

    /**
     * 
     * @returns {Pregunta} Retorna la pregunta encontrada
     */
    obtenerIndicePregunta() {
        return this.preguntas[this.indicePregunta]
    }
    
    haFinalizado(){
        return this.preguntas.length === this.indicePregunta
    }

    /**
     * 
     * @param {string} respuesta respuesta escogida por el jugador
     */
    advinar(respuesta) {
        if(this.obtenerIndicePregunta().respuestaCorrecta(respuesta)){
            this.puntajeJugador++;
        }
        this.indicePregunta++;
    }

  

    

}




