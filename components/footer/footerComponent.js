export function footer(){
    let footer = document.createElement('footer');

    let link = document.createElement('a');
    link.href = "https://github.com/sofiagarcia358";
    link.target = "_blank"; // Abre en nueva pestaña

    let gitBox = document.createElement('div');
    gitBox.className = "github-box";
    gitBox.innerText = "GitHub";

    link.appendChild(gitBox);
    footer.appendChild(link);

    return footer;
}
