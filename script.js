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
count();


function novoForm() {
  const form = document.getElementById('evaluation-form');
  const nome = document.getElementById('input-name');
  const Snome = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const content = document.querySelector('input[name="content"]:checked').value;
  form.innerHTML = '';
  form.innerText = `Nome: ${nome.value} ${Snome.value} \n
  Email: ${email.value} \n Casa: ${casa.value} \n Família: ${family} \n 
  Matérias: ${content} \n
  Avaliação: ${rate} \n
  Observações: ${textarea.value}`;
}

submitButton.addEventListener('click', novoForm);