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