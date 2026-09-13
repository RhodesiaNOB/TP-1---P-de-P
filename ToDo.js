function crearTarea(titulo, descripcion, estado, fechaVencimiento, fechaCreacion, dificultad, ultimaEdicion) {
  return {
    titulo: titulo,
    descripcion: descripcion || "Sin descripción",
    estado: estado || "pendiente",
    fechaCreacion: fechaCreacion,
    fechaVencimiento: fechaVencimiento || "Sin fecha de vencimiento",
    dificultad: dificultad || "facil",
    ultimaEdicion: ultimaEdicion || fechaCreacion,
  };
}

//Mostrar dificultad

function mostrarDificultad(dificultad) {
    switch (dificultad) {
        case "facil":
            return "*";
        case "medio":
            return "**";
        case "dificil":
            return "***";
        default:
            return dificultad;
    }
}

//Crear tarea

function agregarTarea(tareas) {
    let titulo = prompt("Ingrese el título de la Tarea (el Título es OBLIGATORIO, máx 100 caracteres):");
    while (!titulo || titulo.length > 100) {
        console.error("ERROR: El título es obligatorio y debe tener hasta 100 caracteres. Por favor, ingrese un título válido.");
        titulo = prompt("Ingrese el título de la Tarea (el Título es OBLIGATORIO, máx 100 caracteres):");
    }
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    while (descripcion !== null && descripcion.length > 500) {
        console.error("ERROR: La descripción no puede tener más de 500 caracteres. Por favor, ingrese una descripción válida.");
        descripcion = prompt("Ingrese la descripción de la tarea:");
    }
    let estado = prompt("Ingrese el estado de la tarea ([1]pendiente, [2]en curso, [3]terminada, [4]cancelada):");
    let opcion = parseInt(estado);
    switch(opcion) {
        case 1:
            estado = "pendiente";
            break;
        case 2:
            estado = "en curso";
            break;
        case 3:
            estado = "terminada";
            break;
        case 4:
            estado = "cancelada";
            break;
        default:
            console.error("ERROR: Opción inválida. Se establecerá el estado como 'pendiente' por defecto.");
            estado = "pendiente";
    }
    let fechaCreacion = new Date();
    let fechaVencimientoTexto = prompt("Ingrese la fecha de vencimiento de la tarea (D/M/A):");
    while (fechaVencimientoTexto && new Date(fechaVencimientoTexto) < fechaCreacion) {
        console.error("ERROR: La fecha de vencimiento no puede ser anterior a la fecha de creación. Por favor, ingrese una fecha válida.");
        fechaVencimientoTexto = prompt("Ingrese la fecha de vencimiento de la tarea (D/M/A):");
    }
    //Lo hizo la IA 
    let fechaVencimiento = fechaVencimientoTexto ? new Date(fechaVencimientoTexto) : null;

    let dificultad = prompt("Ingrese la dificultad de la tarea ([*]facil, [**]medio, [***]dificil):");
    switch(dificultad) {
        case "*":
            dificultad = "facil";
            break;
        case "**":
            dificultad = "medio";
            break;
        case "***":
            dificultad = "dificil";
            break;
        default:
            console.error("ERROR: Opción inválida. Se establecerá la dificultad como 'fácil' por defecto.");
            dificultad = "facil";
    }

    const nuevaTarea = crearTarea(titulo, descripcion, estado, fechaVencimiento, fechaCreacion, dificultad);
    tareas.push(nuevaTarea);
    console.log("Tarea creada con éxito.");
}

//Ver tareas creadas

function verTodasLasTareas(tareas) {
    if (tareas.length === 0) {
        console.log("No hay tareas registradas.");
    } else {
        tareas.forEach((tarea, index) => {
            console.log(`Tarea ==${index + 1}==`);
            console.log(`  Título: ${tarea.titulo}`);
            console.log(`  Descripción: ${tarea.descripcion}`);
            console.log(`  Estado: ${tarea.estado}`);
            console.log(`  Fecha de creación: ${tarea.fechaCreacion}`);
            console.log(`  Fecha de vencimiento: ${tarea.fechaVencimiento}`);
            console.log(`  Dificultad: ${mostrarDificultad(tarea.dificultad)}`);
            console.log("---");
        });
    }
}

function verTareasTerminadas(tareas) {
    const tareasTerminadas = tareas.filter(tarea => tarea.estado === "terminada");
    if (tareasTerminadas.length === 0) {
        console.log("No hay tareas terminadas.");
    } else {
        tareasTerminadas.forEach((tarea, index) => {
            console.log(`Tarea ==${index + 1}==`);
            console.log(`  Título: ${tarea.titulo}`);
            console.log(`  Descripción: ${tarea.descripcion}`);
            console.log(`  Estado: ${tarea.estado}`);
            console.log(`  Fecha de creación: ${tarea.fechaCreacion}`);
            console.log(`  Fecha de vencimiento: ${tarea.fechaVencimiento}`);
            console.log(`  Dificultad: ${mostrarDificultad(tarea.dificultad)}`);
            console.log("---");
        });
    }
}

function verTareasPendientes(tareas) {
    const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendiente");
    if (tareasPendientes.length === 0) {
        console.log("No hay tareas pendientes.");
    } else {
        tareasPendientes.forEach((tarea, index) => {
            console.log(`Tarea ==${index + 1}==`);
            console.log(`  Título: ${tarea.titulo}`);
            console.log(`  Descripción: ${tarea.descripcion}`);
            console.log(`  Estado: ${tarea.estado}`);
            console.log(`  Fecha de creación: ${tarea.fechaCreacion}`);
            console.log(`  Fecha de vencimiento: ${tarea.fechaVencimiento}`);
            console.log(`  Dificultad: ${mostrarDificultad(tarea.dificultad)}`);
            console.log("---");
        });
    }
}

function verTareasEnCurso(tareas) {
    const tareasEnCurso = tareas.filter(tarea => tarea.estado === "en curso");
    if (tareasEnCurso.length === 0) {
        console.log("No hay tareas en curso.");
    } else {
        tareasEnCurso.forEach((tarea, index) => {
            console.log(`Tarea ==${index + 1}==`);
            console.log(`  Título: ${tarea.titulo}`);
            console.log(`  Descripción: ${tarea.descripcion}`);
            console.log(`  Estado: ${tarea.estado}`);
            console.log(`  Fecha de creación: ${tarea.fechaCreacion}`);
            console.log(`  Fecha de vencimiento: ${tarea.fechaVencimiento}`);
            console.log(`  Dificultad: ${mostrarDificultad(tarea.dificultad)}`);
            console.log("---");
        });
    }
}

//Buscar Tarea

function buscarTarea(tareas, titulo) {
  const tareaEncontrada = tareas.find(tarea => tarea.titulo.toLowerCase() === titulo.toLowerCase());
  return tareaEncontrada;
}

function buscarTareasPorTitulo(tareas, palabraClave) {
  return tareas.filter(tarea => tarea.titulo.toLowerCase().includes(palabraClave.toLowerCase()));
}

//Modificar Tarea

function modificarTarea(tareas, titulo) {
    const tarea = buscarTarea(tareas, titulo);
    if (tarea) {
        const nuevoTitulo = prompt("Ingrese el nuevo título de la tarea (deje en blanco para no modificar):");
        if (nuevoTitulo !== null && nuevoTitulo !== "") {
            tarea.titulo = nuevoTitulo;
        }
        const nuevaDescripcion = prompt("Ingrese la nueva descripción de la tarea (deje en blanco para no modificar):");
        if (nuevaDescripcion !== null && nuevaDescripcion !== "") {
            tarea.descripcion = nuevaDescripcion;
        }
        const nuevoEstado = prompt("Ingrese el nuevo estado de la tarea (deje en blanco para no modificar):");
        if (nuevoEstado !== null && nuevoEstado !== "") {
            tarea.estado = nuevoEstado;
        }
        const nuevaFechaVencimiento = prompt("Ingrese la nueva fecha de vencimiento de la tarea (D/M/A, deje en blanco para no modificar):");
        if (nuevaFechaVencimiento !== null && nuevaFechaVencimiento !== "") {
            tarea.fechaVencimiento = new Date(nuevaFechaVencimiento);
        }
        const nuevaDificultad = prompt("Ingrese la nueva dificultad de la tarea (deje en blanco para no modificar):");
        if (nuevaDificultad !== null && nuevaDificultad !== "") {
            tarea.dificultad = nuevaDificultad;
        }

        let nuevaUltimaEdicion = prompt("Ingrese la fecha de la última edición:");
        while (nuevaUltimaEdicion === null || nuevaUltimaEdicion === "") {
            console.error("ERROR: La fecha de la última edición no puede estar vacía. Por favor, ingrese una fecha válida.");
            nuevaUltimaEdicion = prompt("Ingrese la fecha de la última edición:");
        }
        tarea.ultimaEdicion = new Date(nuevaUltimaEdicion);
    } else {
        console.log("ERROR: Tarea no encontrada. Inténtelo nuevamente.");
    }
}

//Menú Principal

function menuPrincipal() {
    let salir = false;
    const tareas = [];

    while (!salir) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1) Crear tarea\n" +
            "2) Ver las tareas\n" +
            "3) Ver tareas terminadas\n" +
            "4) Ver tareas pendientes\n" +
            "5) Ver tareas en curso\n" +
            "6) Buscar tarea por título\n" +
            "7) Modificar tarea\n" +
            "8) Salir"
        );

        switch (opcion) {
            case "1":
                agregarTarea(tareas);
                break;
            case "2": {
                let op = prompt(
                    "Seleccione una opción:\n" +
                    "1) Ver todas las tareas\n" +
                    "2) Ver tareas terminadas\n" +
                    "3) Ver tareas pendientes\n" +
                    "4) Ver tareas en curso\n" +
                    "5) Volver al menú principal"
                );
                switch (op) {
                    case "1":
                        verTodasLasTareas(tareas);
                        break;
                    case "2":
                        verTareasTerminadas(tareas);
                        break;
                    case "3":
                        verTareasPendientes(tareas);
                        break;
                    case "4":
                        verTareasEnCurso(tareas);
                        break;
                    case "5":
                        break;
                    default:
                        console.log("Opción no válida.");
                }
                break;
            }
            case "3":
                verTareasTerminadas(tareas);
                break;
            case "4":
                verTareasPendientes(tareas);
                break;
            case "5":
                verTareasEnCurso(tareas);
                break;
            case "6": {
                const palabraClave = prompt("Introduce el título de una Tarea para buscarla:");
                const resultados = buscarTareasPorTitulo(tareas, palabraClave);
                if (resultados.length === 0) {
                    console.log("No hay tareas relacionadas con la búsqueda.");
                } else {
                    let volver = false;
                    while (!volver) {
                        let listado = "Estas son las tareas relacionadas:\n\n";
                        resultados.forEach((tarea, index) => {
                            listado += `  [${index + 1}] ${tarea.titulo}\n`;
                        });
                        console.log(listado);
                        const seleccion = prompt("¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver.");
                        const indiceSeleccion = parseInt(seleccion);
                        if (indiceSeleccion === 0) {
                            volver = true;
                        } else if (!isNaN(indiceSeleccion) && indiceSeleccion >= 1 && indiceSeleccion <= resultados.length) {
                            const tareaSeleccionada = resultados[indiceSeleccion - 1];
                            console.log(`Título: ${tareaSeleccionada.titulo}`);
                            console.log(`Descripción: ${tareaSeleccionada.descripcion}`);
                            console.log(`Estado: ${tareaSeleccionada.estado}`);
                            console.log(`Fecha de creación: ${tareaSeleccionada.fechaCreacion}`);
                            console.log(`Fecha de vencimiento: ${tareaSeleccionada.fechaVencimiento}`);
                            console.log(`Dificultad: ${mostrarDificultad(tareaSeleccionada.dificultad)}`);
                        } else {
                            console.log("Opción inválida.");
                        }
                    }
                }
                break;
            }
            case "7": {
                const titulo = prompt("Ingrese el título de la tarea a modificar:");
                modificarTarea(tareas, titulo);
                break;
            }
            case "8":
                prompt("Saliendo del Programa... Presione Aceptar para continuar.");
                salir = true;
                break;
            default:
                console.log("Opción no válida. Inténtelo Nuevamente.");
        }
    }
}

//Iniciador del programa

menuPrincipal();