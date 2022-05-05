const buttonLogin = document.getElementById('button1');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');
submitButton.disabled = true;

function checaBox() {
  submitButton.disabled = false;
}

checkbox.addEventListener('click', checaBox);

function login(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);

function count() {
  const valor = textarea.value.length;
  const resultado = 500 - valor;
  contador.innerText = resultado;
}
textarea.addEventListener('keyup', count);
<<<<<<< HEAD
count();
=======
count();
>>>>>>> 9f629a1d39584893f8a30220c5f24e215456f5c3
