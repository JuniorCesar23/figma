var button = document.querySelector('#button-criar-novo-topico');
var divCriarTopico = document.querySelector('.div-criar-topicos');
var divNovoTopico = document.querySelector('.novo-topico');
var divTopicoEnviado = document.querySelector('.div-topico-enviado');

button.addEventListener('click', function(){
    divCriarTopico.style.display = 'none';
    divNovoTopico.classList.remove('esconder-div');
    divTopicoEnviado.classList.add('esconder-div');
})