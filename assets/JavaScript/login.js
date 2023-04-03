const password = document.querySelector('#password');
const button = document.querySelector('.button-login');
const form = document.querySelector('.login-form');
const input = document.querySelector('.input_login');
const eye = document.querySelector('.seepassword');

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    }
    else{
    alert("E-mail invalido");
    }
    }

const validateSenha = () =>{
    if(password.value.length >= 8){
        button.removeAttribute('disabled');
}
    else{
        button.setAttribute('disabled', '');
    }}

const nextPage = (event) => {
    event.preventDefault();

    localStorage.setItem('client', input.value);

    window.location = 'assets/pages/principal.html'
}

function togglePass() {
    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}

eye.addEventListener('click', togglePass);
password.addEventListener('input', validateSenha);
form.addEventListener('submit', nextPage);

    
