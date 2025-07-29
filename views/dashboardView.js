import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";

export function dashboard(){

    let contenedor = document.createElement('section');

    //header
    contenedor.appendChild(header())
    contenedor.appendChild(footer())

    return contenedor;
}
document.body.appendChild(dashboard());