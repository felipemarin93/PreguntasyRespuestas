import {preguntasNivel1,preguntasNivel2,preguntasNivel3,preguntasNivel4,preguntasNivel5} from "./Constantes.js"

export class Pregunta {

    /**
     * 
     * @param {string} pregunta este es el texto de la pregunta
     * @param {string[]} opciones Son la sopciones de la pregunta
     * @param {string} respuesta esta es la respuesta de la pregunta
     */

    /*constructor(pregunta, opciones, respuesta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }*/


   
    /**
     * 
     * @param {string} opcion Texto para seleccionar
     * @returns {boolean} Esto retorna si la respuesta es correcta
     */
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta;
    }

    mostrarPreguntaNivel1(){
        let numeroAleatorio =  Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel1[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta        
        const opciones = preguntasNivel1[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton =1;

        for (let index = 0; index < opciones.length; index++) {
            document.getElementById('btn'+numeroBoton).innerText = opciones[index]
            console.log(document.getElementById('btn'+numeroBoton))
            numeroBoton++;
        }
        
    }

    mostrarPreguntaNivel2(){
        let numeroAleatorio =  Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel1[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta        
        const opciones = preguntasNivel1[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton =1;

        for (let index = 0; index < opciones.length; index++) {
            document.getElementById('btn'+numeroBoton).innerText = opciones[index]
            console.log(document.getElementById('btn'+numeroBoton))
            numeroBoton++;
        }
        
    }

    mostrarPreguntaNivel3(){
        let numeroAleatorio =  Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel1[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta        
        const opciones = preguntasNivel1[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton =1;

        for (let index = 0; index < opciones.length; index++) {
            document.getElementById('btn'+numeroBoton).innerText = opciones[index]
            console.log(document.getElementById('btn'+numeroBoton))
            numeroBoton++;
        }
        
    }

    mostrarPreguntaNivel4(){
        let numeroAleatorio =  Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel1[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta        
        const opciones = preguntasNivel1[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton =1;

        for (let index = 0; index < opciones.length; index++) {
            document.getElementById('btn'+numeroBoton).innerText = opciones[index]
            console.log(document.getElementById('btn'+numeroBoton))
            numeroBoton++;
        }
        
    }

    mostrarPreguntaNivel5(){
        let numeroAleatorio =  Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel1[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta        
        const opciones = preguntasNivel1[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton =1;

        for (let index = 0; index < opciones.length; index++) {
            document.getElementById('btn'+numeroBoton).innerText = opciones[index]
            console.log(document.getElementById('btn'+numeroBoton))
            numeroBoton++;
        }
        
    }


    

}


