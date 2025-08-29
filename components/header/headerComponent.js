export function header(){
    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.innerText = "Todo_list";
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "cuadroPendiente";

    // Texto y número, todo en una sola línea
    let texto = document.createElement('span');
    texto.innerText = "Pendiente:";
    texto.className = "texto-pendiente";

    let numero = document.createElement('span');
    numero.innerText = "10";
    numero.className = "cuadro-numero";

    divTareas.appendChild(texto);
    divTareas.appendChild(numero);

    header.appendChild(divTareas);

    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo-usuario";
    divLogoUsuario.innerText = "🫣";
    header.appendChild(divLogoUsuario);

    return header;
}


