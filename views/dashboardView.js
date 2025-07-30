import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { tareas } from "../components/tareas/tareaComponent.js";

export function dashboard(){

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header())

    //section
    let seccion1 = document.createElement('section')
    seccion1.className = "seccion-1"
    seccion1.appendChild(tareas())
    seccion1.appendChild(informacion())
    dashboard.appendChild(seccion1)

    //footer
    dashboard.appendChild(footer())
    
    return dashboard;
}
document.body.appendChild(dashboard());