
const password = document.getElementById('password')
const input = document.querySelector('#confirmPassword')
function verify() {
    if (password.value === input.value) {
        alert('Acesso permitido')
        window.location.href = 'final.html'
    }
    else {
        alert('Acesso negado')
    }
    input.value = ''
    password.value = ''
}

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        verify()
    }
})

password.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        verify()
    }
})