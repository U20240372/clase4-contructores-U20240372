import { Tarea, Usuario } from './Tarea.js';

const usuario1 = new Usuario('OscarMurillo', 'oscarmurillo@gmail.com',);

const tarea1 = new Tarea('Estudiar JavaScript', 'Repasar Objetos y clases', '2025-25-02', 'alta');
const tarea2 = new Tarea('Hacer ejercicio', '30 minutos de cardio', '2025-24-03', 'media');

usuario1.agregarTarea(tarea1);
usuario1.agregarTarea(tarea2);

tarea1.actualizarEstado('En Progreso');
tarea2.marcarComoCOmpletada();

usuario1.obtenerResumen();

console.log(usuario1.obtenerResumen());
