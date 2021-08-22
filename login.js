function traerdatos() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const usuario = {
        email,
        password      
}
console.log(usuario)
localStorage.setItem('usuario', JSON.stringify(usuario))
location.href="./login/index.html"
}