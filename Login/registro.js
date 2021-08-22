const botonregistrar = document.getElementById('Registro')
const usuario = []
 const traerdatos = ()=> {
    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    
    const registro = {
        nombre,
        correo,
        contraseña
      
}
console.log(registro)    
// usuario.unshift(registro);

// localStorage.setItem('Usuario', JSON.stringify(usuario))


}
botonregistrar.addEventListener('click', traerdatos)
