/*
import { nombreJugador } from './Jugador.js';
import { puntajeJugador } from './Jugador.js';
import { dineroJugador } from './Jugador.js';


export const mensajeBienvenida = 'Bienvenid@ al concurso de preguntas y Respuestas, a continuación le haremos unas preguntas a media que acierte la respuesta correcta irá acumulando puntos y dinero';
export const continuaJugando = '¿Desea continuar Jugando o prefiere irse con el acumulado que tiene hasta el momento?';
export const insertar = `INSERT INTO JUGADOR VALUES ('${nombreJugador}',${puntajeJugador},${dineroJugador})`;
export const consultar = 'SELECT * FROM JUGADOR ORDER BY puntaje DESC';
*/

export const preguntasNivel1 = [

    {
        pregunta: "¿Cuántos minutos tiene una hora?",
        opciones: ["Buenos Aires","Lima","Quito","Bogotá"],
        respuesta: "Bogotá",
    },
    {
        pregunta: "¿Cuál es la capital de Colombia?",
        opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
        respuesta: "Mercurio",
    },
    {
        pregunta: "Es un sinónimo de rápido",
        opciones: ["Lento", "Alto", "Veloz", "Oscuro"],
        respuesta: "Veloz",
    },
    {
        pregunta: "¿Cuántos años tiene una década?",
        opciones: ["Cinco", "Diez", "Doce", "Veinte"],
        respuesta: "Diez",
    },
    {
        pregunta: "¿Cuál de estos animales no tiene alas?",
        opciones: ["Canguro", "Colibrí", "Gallina", "Águila"],
        respuesta: "Canguro",
    }
]

export const preguntasNivel2 = [

    {
        pregunta: "¿En qué ciudad y en qué país se encuentra la Torre Eiffel?",
        opciones: ["Roma","Venecia","Londres","Paris"],
        respuesta: "Paris",
    },
    {
        pregunta: "¿Qué planeta es el más cercano al Sol?",
        opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
        respuesta: "Mercurio",
    },
    {
        pregunta: "¿Cuántas sílabas tiene la palabra abecedario?",
        opciones: ["Una", "Tres", "Cinco", "Seis"],
        respuesta: "Cinco",
    },
    {
        pregunta: "¿Cuál es el triángulo equilátero?",
        opciones: ["El que tiene todos los lados iguales", "El que tiene dos lados iguales", "El que tiene un ángulo interno de 95 grados", "Ninguna de las anteriores"],
        respuesta: "El que tiene todos los lados iguales",
    },
    {
        pregunta: "¿Cuál es la Capital de Venezuela?",
        opciones: ["Lima", "Caracas", "Quito", "Bogotá"],
        respuesta: "Caracas",
    }
]
export const preguntasNivel3 = [

    {
        pregunta: "¿Quién descubrió América?",
        opciones: ["Simón Bolívar","Cristóbal Colón","Jose Maria Córdova","Napoleón Bonaparte"],
        respuesta: "Cristóbal Colón",
    },
    {
        pregunta: "¿Cuál es el rio más largo del mundo?",
        opciones: ["Amazonas", "Mississippi", "Yang Tse Klang", "Nilo"],
        respuesta: "Amazonas",
    },
    {
        pregunta: "¿Cuantos lados tiene un triángulo?",
        opciones: ["dos", "Tres", "Cinco", "Cuatro"],
        respuesta: "Tres",
    },
    {
        pregunta: "¿Cuál es el idioma hablado en Brasil?",
        opciones: ["Español", "Brasilero", "Inglés", "Portugués"],
        respuesta: "Portugués",
    },
    {
        pregunta: "¿Cuál de los siguientes números no es un número primo?",
        opciones: ["dos", "siete", "nueve", "trece"],
        respuesta: "nueve",
    }
]

export const preguntasNivel4 = [

    {
        pregunta: "Este país participó en la primera guerra mundial",
        opciones: ["Turquía","Corea del norte","Siria","Suecia"],
        respuesta: "Turquía",
    },
    {
        pregunta: "Día que se celebra la independencia de los Estados Unidos",
        opciones: ["4 de agosto", "12 de julio", "4 de julio", "1 de agosto"],
        respuesta: "4 de julio",
    },
    {
        pregunta: "¿Cuántos metros mide una hectárea?",
        opciones: ["cien", "mil", "diez mil", "cien mil"],
        respuesta: "diez mil",
    },
    {
        pregunta: "¿Cómo se llama la capital de Mongolia?",
        opciones: ["Bangladesh", "Ulán Bator", "Mongolia", "Nueva Delhi"],
        respuesta: "Ulán Bator",
    },
    {
        pregunta: "¿Cuántos grados mide un ángulo recto?",
        opciones: ["noventa", "ochenta", "ciento veinte", "ciento ochenta"],
        respuesta: "noventa",
    }
]
export const preguntasNivel5 = [

    {
        pregunta: "Son vocales cerradas",
        opciones: ["a,e,i","a,u,o","i,u","a,e,o"],
        respuesta: "a,e,o",
    },
    {
        pregunta: "¿Quién inventó el teléfono?",
        opciones: ["Amazonas", "Mississippi", "Yang Tse Klang", "Nilo"],
        respuesta: "Amazonas",
    },
    {
        pregunta: "¿Cual es la moneda que tiene mas valor en el mundo?",
        opciones: ["dólar", "euro", "libra esterlina", "dinar kuwaití"],
        respuesta: "dinar kuwaití",
    },
    {
        pregunta: "¿Cuál es el país mas seguro del mundo?",
        opciones: ["Islandia", "Dinamarca", "Nueva Zelanda", "Austria"],
        respuesta: "Islandia",
    },
    {
        pregunta: "¿Cuantas lunas tiene júpiter?",
        opciones: ["cincuenta y dos", "catorce", "setenta y nueve", "ochenta y dos"],
        respuesta: "setenta y nueve",
    }
]
