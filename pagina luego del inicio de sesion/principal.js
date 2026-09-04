
let nombreEstudiante = "Kylian Mbape";


let notasNuevas = 3;
let tareasPendientes = 2;



function cargarPrincipal() {
   
    document.getElementById("nombreUsuario").textContent =
        "Hola, " + nombreEstudiante;

    document.getElementById("bienvenida").textContent =
        "¡Bienvenido, " + nombreEstudiante + "!";

    document.getElementById("cantidadNotas").textContent =
        notasNuevas;

    document.getElementById("cantidadTareas").textContent =
        tareasPendientes;

}



function verificarTareas() {

    if (tareasPendientes > 0) {
        console.log("Tienes tareas pendientes.");
    } else {
        console.log("No tienes tareas pendientes.");
    }

}



function verificarNotas() {

    if (notasNuevas > 0) {
        console.log("Tienes nuevas notas disponibles.");
    } else {
        console.log("No tienes nuevas notas.");
    }

}



let novedades = ["Notas", "Tareas"];

for (let i = 0; i < novedades.length; i++) {

    console.log("Novedad disponible: " + novedades[i]);

}



cargarPrincipal();

verificarTareas();

verificarNotas();