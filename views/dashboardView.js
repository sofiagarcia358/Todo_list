import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { tareas } from "../components/tareas/tareaComponent.js";

export function dashboard(){

    // Base de datos simulada de tareas
let tareasDb = [
    {
        titulo: "Hola mundo",
        estado: "Pendiente",
        descripcion: "hacer tareas",
        fechaAs: "2025-07-28",
        fechaEn: "2025-08-05",
        integrantes: ["😎", "😚", "🙂‍↔️"]
    },
    {
        titulo: "Hola mundo 2",
        estado: "En progreso",
        descripcion: "hacer tareas",
        fechaAs: "2025-07-29",
        fechaEn: "2025-08-06",
        integrantes: ["😹", "😿"]
    },
    {
        titulo: "Hola mundo 3",
        estado: "Completada",
        descripcion: "hacer tareas",
        fechaAs: "2025-07-30",
        fechaEn: "2025-08-07",
        integrantes: ["🫩", "🤑", "🤡"]
    }
];

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header())

    //section
    let seccion1 = document.createElement('section')
    seccion1.className = "seccion-1"
    seccion1.appendChild(tareas(tareasDb));
    seccion1.appendChild(informacion(tareasDb[0]));

    dashboard.appendChild(seccion1)

    //footer
    dashboard.appendChild(footer())
    
    return dashboard;
}
document.body.appendChild(dashboard());