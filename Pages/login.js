document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    if (email.trim() !== '' && senha.trim() !== '' && validarEmail(email)) {
        window.location.href = '/Pages/Inicioi.html';
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
        return false; 
    }
});


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}