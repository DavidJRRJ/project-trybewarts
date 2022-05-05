let buttonLogin = document.getElementById('button1');
buttonLogin.addEventListener('click' , login);
let email = document.getElementById('email');
let senha = document.getElementById('senha');

function login(event){
   event.preventDefault();
   if (email.value == 'tryber@teste.com' && senha.value == '123456'){
    alert('Olá, Tryber!');
}
else {
    alert('Email ou senha inválidos.')
}
}

