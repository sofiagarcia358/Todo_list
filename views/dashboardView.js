import { header } from "../components/header/headerComponent.js";

export function dashboard(){

    let contenedor = document.createElement('section');

    //header
    contenedor.appendChild(header())

    return contenedor;

}
document.body.appendChild(dashboard());