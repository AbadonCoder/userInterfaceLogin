import UI from './UI/UI.js';

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const linkPass = document.querySelector('#resetPassword');
const linkAccount = document.querySelector('#createAccount');

const form = document.querySelector('#form');

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {

    usernameInput.addEventListener('input', validateData);
    passwordInput.addEventListener('input', validateData);
    form.addEventListener('submit', login);

    linkPass.addEventListener('click', (e) => {
        e.preventDefault();
        alert('No contamos con la funcionalidad. X(');
    });

    linkAccount.addEventListener('click', (e) => {
        e.preventDefault();
        alert('No contamos con la funcionalidad. X(');
    });
});

function validateData(e) {
    let data = e.target.value;
    data = data.trim();

    if(data === '') {
        ui.showMessage('error', 'Todos los campos son obligatorios.');
    }
}

function login(e) {
    e.preventDefault();

    if(usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        ui.showMessage('error', 'Todos los campos son obligatorios.');
        return;
    }

    ui.showMessage('success', 'Iniciando Sesión');
    form.reset();

    setTimeout(() => {
        alert('Eso fue todo profe, buen día :D');
    }, 2500);
}