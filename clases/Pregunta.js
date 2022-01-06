import { preguntasNivel1, preguntasNivel2, preguntasNivel3, preguntasNivel4, preguntasNivel5 } from "./Constantes.js"

export class Pregunta {

    /**
     * 
     * @param {string} pregunta este es el texto de la pregunta
     * @param {string[]} opciones Son la sopciones de la pregunta
     * @param {string} respuesta esta es la respuesta de la pregunta
     */
    /*
    constructor(pregunta, opciones, respuesta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }
    */



    /**
     * 
     * @param {string} opcion Texto para seleccionar
     * @returns {boolean} Esto retorna si la respuesta es correcta
     */
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta;
    }
    

    
    //Mostrar preguntas Nivel 1 en la interfaz
    mostrarPreguntaNivel1() {
        let numeroAleatorio = Math.floor(Math.random() * (5 - 0)) + 0; //Crear número aleatorio
        const tituloPregunta = preguntasNivel1[numeroAleatorio].pregunta //Se asigna la pregunta de nivel 1 de la clase Pregunta
        document.getElementById('pregunta').innerText = tituloPregunta //Se asigna la pregunta seleccionada para que la muestre en la interfaz

        const contenedorOpciones = document.getElementById('opciones')

        const opciones = preguntasNivel1[numeroAleatorio].opciones

        console.log(opciones);
        let numeroBoton = 1;

        for (let i = 0; i < opciones.length; i++) {
            document.getElementById('btn' + numeroBoton).innerText = opciones[i]
            console.log(document.getElementById('btn' + numeroBoton))
            numeroBoton++;
        }


        let nivel = "Nivel de dificultad: Muy Fácil";
        document.getElementById('progreso').innerText = nivel;

        const respuestaCorrecta = preguntasNivel1[numeroAleatorio].respuesta

        

    }
    //Mostrar preguntas Nivel 2 en la interfaz
    mostrarPreguntaNivel2() {
        window.confirm("Deseas Continuar? Recuerda que si te equivocas pierdes todo");
        let numeroAleatorio = Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel2[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta

        const opciones = preguntasNivel2[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton = 1;

        for (let i = 0; i < opciones.length; i++) {
            document.getElementById('btn' + numeroBoton).innerText = opciones[i]
            console.log(document.getElementById('btn' + numeroBoton))
            numeroBoton++;
        }

        let nivel = "Nivel de dificultad:  Fácil";
        document.getElementById('progreso').innerText = nivel;
    }
    //Mostrar preguntas Nivel 3 en la interfaz
    mostrarPreguntaNivel3() {
        window.confirm("Deseas Continuar? Recuerda que si te equivocas pierdes todo");
        let numeroAleatorio = Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel3[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta
        const opciones = preguntasNivel3[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton = 1;

        for (let i = 0; i < opciones.length; i++) {
            document.getElementById('btn' + numeroBoton).innerText = opciones[i]
            console.log(document.getElementById('btn' + numeroBoton))
            numeroBoton++;
        }

        let nivel = "Nivel de dificultad:  Medio";
        document.getElementById('progreso').innerText = nivel;

    }
    //Mostrar preguntas Nivel 4 en la interfaz
    mostrarPreguntaNivel4() {
        window.confirm("Deseas Continuar? Recuerda que si te equivocas pierdes todo");
        let numeroAleatorio = Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel4[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta
        const opciones = preguntasNivel4[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton = 1;

        for (let i = 0; i < opciones.length; i++) {
            document.getElementById('btn' + numeroBoton).innerText = opciones[i]
            console.log(document.getElementById('btn' + numeroBoton))
            numeroBoton++;
        }
        let nivel = "Nivel de dificultad:  Difícil";
        document.getElementById('progreso').innerText = nivel;
    }
    //Mostrar preguntas Nivel 5 en la interfaz
    mostrarPreguntaNivel5() {
        window.confirm("Deseas Continuar? Recuerda que si te equivocas pierdes todo");
        let numeroAleatorio = Math.floor(Math.random() * (5 - 0)) + 0;
        const tituloPregunta = preguntasNivel5[numeroAleatorio].pregunta
        document.getElementById('pregunta').innerText = tituloPregunta
        const opciones = preguntasNivel5[numeroAleatorio].opciones
        console.log(opciones);
        let numeroBoton = 1;

        for (let i = 0; i < opciones.length; i++) {
            document.getElementById('btn' + numeroBoton).innerText = opciones[i]
            console.log(document.getElementById('btn' + numeroBoton))
            numeroBoton++;
        }

        let nivel = "Nivel de dificultad:  Experto";
        document.getElementById('progreso').innerText = nivel;
    }

    
}