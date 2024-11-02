const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function () {

    let login = 'felipeeduardo';
    let password = '123'

    let loginInput = document.getElementById('login-input').value;
    let passwordInput = document.getElementById('password-input').value;

    if (loginInput === login && passwordInput == password) {

        alert('entrou');

    } else {
        alert('não entrou')
    };



});