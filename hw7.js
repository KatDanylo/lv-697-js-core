const inpEmail = document.getElementById(input_email);
let email = inpEmail.value;
let res = email.replace(/\D/);
console.log(res);