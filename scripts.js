const menu = document.querySelector(".menu-bar");
const icon = document.getElementById('icone1');
const icon2 = document.getElementById('icone2');
const perfil = document.querySelector(".caixa-perfil");
const caixaContato = document.querySelector(".Caixa");


function abrirBarra() {
    icon.style.display = 'none';
    icon2.style.display = 'block';
    
    perfil.style.display = "none"
    caixaContato.style.display = "block"
    

}

function fecharBarra() {
    icon2.style.display = 'none';
    icon.style.display = 'block';
    perfil.style.display = "block"
    caixaContato.style.display = "none"

}






