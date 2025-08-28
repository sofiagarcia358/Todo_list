import { formulario } from "../formulario/formularioComponent.js";

export function informacion(tarea) {
    let div = document.createElement('div');
    div.className = "div-informacion";

    // Botones superiores
    let divBotones = document.createElement('div');
    divBotones.className = "div-btn";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.innerText = "+ tarea";

    let form = formulario(); // Crear el formulario
    form.classList.add("form");
    form.style.display = "none"; // Asegurar que esté oculto inicialmente

    btnTarea.addEventListener('click', () => {
        form.style.display = form.style.display === "none" ? "block" : "none";
    });

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.innerText = "Archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);

    // Contenido de la tarjeta
    let divTexto = document.createElement('div');
    divTexto.className = "div-texto";

    let divEstado = document.createElement('div');
    divEstado.className = "estado";
    divEstado.innerText = tarea.estado_tarea;

    let titulo = document.createElement('h3');
    titulo.innerText = tarea.nombre;

    let parrafo = document.createElement('p');
    parrafo.innerText = tarea.descripcion;

    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "div-integrantes";

    let labelIntegrantes = document.createElement('p');
    labelIntegrantes.innerText = "Integrantes";

    let divAsignaciones = document.createElement('div');
    divAsignaciones.className = "div-asignaciones";

    //tarea.integrantes.forEach(emoji => {
        //let span = document.createElement('span');
       // span.className = "emoji-integrante";
       // span.innerText = emoji;
       // divAsignaciones.appendChild(span);
    //});

    divIntegrantes.appendChild(labelIntegrantes);
    divIntegrantes.appendChild(divAsignaciones);

    divTexto.appendChild(divEstado);
    divTexto.appendChild(titulo);
    divTexto.appendChild(parrafo);
    divTexto.appendChild(divIntegrantes);

    div.appendChild(divBotones);
    div.appendChild(form); // ✅ Coloca el formulario aquí, fuera del botón
    div.appendChild(divTexto);

    return div;
}

