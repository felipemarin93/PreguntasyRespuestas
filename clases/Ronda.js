import {Pregunta} from './Pregunta.js'
import {preguntasNivel1} from './Constantes.js'

export const preguntas = preguntasNivel1.map(pregunta => new Pregunta (pregunta.pregunta,pregunta.opciones,pregunta.respuesta));
