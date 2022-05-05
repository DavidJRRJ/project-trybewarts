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

const checkbox = document.querySelector("#agreement");
const txt = document.querySelector("#txt");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    let btn = document.createElement('button');
    btn.id = 'submit-btn';
    txt.appendChild(btn);
  } else {
    console.log("Checkbox is not checked..");
    let btn = document.querySelector("#submit-btn");
    txt.removeChild(btn);
  }
});
