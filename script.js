let buttonLogin = document.getElementById('button1');
buttonLogin.addEventListener('click' , login);
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let submitButton = document.getElementById('submit-btn');
let checkbox = document.getElementById('agreement')
checkbox.addEventListener('click',checaBox);
let contador = document.getElementById('counter');
let textarea = document.getElementById('textarea');
submitButton.disabled = true;
textarea.addEventListener('keyup' , count);
count();

function checaBox(){
submitButton.disabled = false;
}

function login(event){
   event.preventDefault();
   if (email.value == 'tryber@teste.com' && senha.value == '123456'){
    alert('Olá, Tryber!');
    }
    else {
    alert('Email ou senha inválidos.')
    }
}

function count() {
    let valor = textarea.value.length
    let resultado = 500 - valor
    contador.innerText = resultado
}

