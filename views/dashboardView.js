export function dashboard(){

    let contenedor = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.innerText = "hola Mundo"
    contenedor.appendChild(h1);

    return contenedor;

}
document.body.appendChild(dashboard());