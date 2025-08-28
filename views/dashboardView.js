import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { tareas } from "../components/tareas/tareaComponent.js";


export async function dashboard(){
    try{

        const resultado = await fetch("http://localhost:3000/tareas");
        const datos = await resultado.json();
        console.log(datos)

        

    // Base de datos simulada de tareas
    let tareasDb = datos;

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    console.log(tareasDb)

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


    } catch(error){
        console.error("error", error)

    }
}


dashboard().then(elem => {
    if (elem) {
        document.body.appendChild(elem);
    }
});