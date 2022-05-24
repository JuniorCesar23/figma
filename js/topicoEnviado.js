var button = document.getElementById('botao-enviar-topico');
var divNovoTopico = document.querySelector('.novo-topico');
var divTopicoEnviado = document.querySelector('.div-topico-enviado');

button.addEventListener('click', function(){
    divNovoTopico.classList.add('esconder-div');
    divTopicoEnviado.classList.remove('esconder-div');
})