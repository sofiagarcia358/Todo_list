import { itemTarea } from "../../moduls/itemTareas/itemTareas.js";

export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasDb.forEach((e, i) => {
        div.appendChild(itemTarea(
            e.id,           // índice de la tarea (1, 2, 3...)
            e.nombre,        // título
            e.estado_tarea,        // estado
            e.fecha_asignada,       // fecha de asignación
            e.fecha_entrega,       // fecha de entrega
            []        // lista de integrantes
        ));
    });

    return div;
}
