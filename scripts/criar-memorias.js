document.querySelector('.btn-criar').addEventListener('click', function(event){
event.preventDefault();

// pega div que contem todas as imagens.
let caixadeimagens = document.querySelector('.img-container');

// pega imagens e conta quantas tem 
let imagens = caixadeimagens.querySelectorAll('img');

console.log(imagens);

if(imagens.length === 0) {
    let cxalerta = document.getElementById('cxalerta');
    cxalerta.style.display = 'block'; // mostrar alerta
}
})
