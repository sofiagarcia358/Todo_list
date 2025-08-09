export function formulario() {
    let div = document.createElement('div');
    div.className = "div-forms";
    div.style.display = "none"; // Oculto por defecto

    // Título principal del formulario
    let tituloFormulario = document.createElement('h2');
    tituloFormulario.innerText = "Nueva tarea";

    // Campo: Título
    let divTitulo = document.createElement('div');
    divTitulo.className = "titulo-tarea";
    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    divTitulo.appendChild(inputTitulo);

    // Campo: Estado
    let divEstado = document.createElement('div');
    divEstado.className = "estado-tarea";
    let selectEstado = document.createElement('select');
    ["pendiente", "en proceso", "completado"].forEach(op => {
        let option = document.createElement('option');
        option.value = op;
        option.innerText = op;
        selectEstado.appendChild(option);
    });
    divEstado.appendChild(selectEstado);

    // Campo: Descripción
    let divDescripcion = document.createElement('div');
    divDescripcion.className = "description-tarea";
    let textarea = document.createElement('textarea');
    textarea.placeholder = "Descripción de la tarea";
    divDescripcion.appendChild(textarea);

    // Campo: Fecha de entrega
    let divFecha = document.createElement('div');
    divFecha.className = "fechaEn-tarea";
    let inputFecha = document.createElement('input');
    inputFecha.type = "date";
    divFecha.appendChild(inputFecha);

    // Botón guardar
    let btnGuardar = document.createElement('button');
    btnGuardar.className = "btn-save";
    btnGuardar.innerText = "Guardar tarea";

    btnGuardar.addEventListener('click', () => {
        const datos = {
            titulo: inputTitulo.value.trim(),
            estado: selectEstado.value,
            descripcion: textarea.value.trim(),
            fechaEntrega: inputFecha.value
        };

        console.log("Datos ingresados:", datos);
        div.style.display = "none";
    });

    // Ensamblar todo al formulario
    div.appendChild(tituloFormulario);
    div.appendChild(divTitulo);
    div.appendChild(divEstado);
    div.appendChild(divDescripcion);
    div.appendChild(divFecha);
    div.appendChild(btnGuardar);

    return div;
}
