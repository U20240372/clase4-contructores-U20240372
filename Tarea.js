// Óscar Iván Murillo Hidalgo. 
// Auto evaluacion = 8

export class Tarea {
    constructor(titulo, descripcion, fechaVencimiento, prioridad){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = "Pendiente";
        this.fechaVencimiento = fechaVencimiento;
        this.prioridad = prioridad;
        this.notas = '';
    }

    actualizarEstado(nuevoEstado){
        const estadosValidos = ['Pendiente', 'En progreso', 'Completada'];
        if (estadosValidos.includes(nuevoEstado)) {
            this.estado = nuevoEstado;
        } else { 
            console.log('Estado no valido');
        }
    }

    editarDetalles(nuevoTitulo, descripcion, fechaVencimiento, prioridad) {
        this.titulo = nuevoTitulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.prioridad = prioridad;
     
    }
    marcarComoCOmpletada() {
        this.estado = 'Completada';
        console.log(`La tarea "${this.titulo}" ha sido marcada como completada.`);
    }
}

export class Usuario {
    constructor(nombreUsuario, correoElectrocino) {
        this.nombreUsuario = nombreUsuario;
        this.correo = correoElectrocino;
        this.tareas = [];
    }

    agregarTarea(tarea){
        this.tareas.push(tarea);
        console.log(`tarea "${tarea.titulo}" agregada a la lista de tareas de ${this.nombreUsuario}. `);
    }

    eliminarTarea(tituloTarea) {
        this.tareas = this.tareas.filter(tarea => tarea.titulo !== tituloTarea);
        
    }
    

    obtenerResumen() {
        return this.tareas.map(tarea =>
            `Título: ${tarea.titulo}, Estado: ${tarea.estado}, Prioridad: ${tarea.prioridad}`
        ).join(`\n`);
    }
}

