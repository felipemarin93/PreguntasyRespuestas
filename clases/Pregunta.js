export class Pregunta {

    /**
     * 
     * @param {string} pregunta este es el texto de la pregunta
     * @param {string[]} opciones Son la sopciones de la pregunta
     * @param {string} respuesta esta es la respuesta de la pregunta
     */

    constructor(pregunta, opciones, respuesta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

   
    /**
     * 
     * @param {string} opcion Texto para seleccionar
     * @returns {boolean} Esto retorna si la respuesta es correcta
     */
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta;
    }
}


