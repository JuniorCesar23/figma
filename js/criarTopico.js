var button = document.getElementById('botao-criar-topico');
var divCriarTopico = document.querySelector('.div-criar-topicos');
var divNovoTopico = document.querySelector('.novo-topico');

button.addEventListener('click', function(){
    divCriarTopico.style.display = 'none';
    divNovoTopico.classList.remove('esconder-div');
});