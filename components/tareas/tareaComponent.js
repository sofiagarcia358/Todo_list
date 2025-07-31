import { itemTarea } from "../../moduls/itemTareas/itemTareas.js";

// Base de datos simulada de tareas
let tareasDb = [
    {
        titulo: "Hola mundo",
        estado: "Pendiente",
        fechaAs: "2025-07-28",
        fechaEn: "2025-08-05",
        lista: ["😎", "😚", "🙂‍↔️"]
    },
    {
        titulo: "Hola mundo 2",
        estado: "En progreso",
        fechaAs: "2025-07-29",
        fechaEn: "2025-08-06",
        lista: ["😹", "😿"]
    },
    {
        titulo: "Hola mundo 3",
        estado: "Completada",
        fechaAs: "2025-07-30",
        fechaEn: "2025-08-07",
        lista: ["🫩", "🤑", "🤡"]
    }
];

export function tareas() {
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasDb.forEach((e, i) => {
        div.appendChild(itemTarea(
            i + 1,           // índice de la tarea (1, 2, 3...)
            e.titulo,        // título
            e.estado,        // estado
            e.fechaAs,       // fecha de asignación
            e.fechaEn,       // fecha de entrega
            e.lista          // lista de integrantes
        ));
    });

    return div;
}
