const usuariosdb = 'http://localhost:3002/usuarios';


const capturaDatos = () => {

let name = document.getElementById('inputNombre').value;
let telefono = document.getElementById('inputTelefono').value;
let direccion = document.getElementById('inputDireccion').value;
let email = document.getElementById('inputCorreo').value;
const descripcion = document.getElementById('inputObservaciones').value;

const user = {
    name,
    telefono,
    direccion,
    email,
    descripcion
}


return user;
  
  }

  //6 Petición POST
const form = document.querySelector('.form-group');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturaDatos();

    await fetch(usuariosdb, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

})
