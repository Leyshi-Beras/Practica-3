
document.addEventListener("DOMContentLoaded", function() {
    enviarContacto();
});

function cargarContactos() {
    var divContacto = document.getElementById('caja-nombre');
    fetch("https://www.raydelto.org/agenda.php").then(function (listado) {
        return listado.json();
    }).then(function (listado) {
        console.log(listado);
        var contacto = listado[1];
        document.getElementById('caja-nombre').value = contacto.nombre;
        document.getElementById('caja-apellido').value = contacto.apellido;
        document.getElementById('caja-telefono').value = contacto.telefono;
    }).catch(error => console.error('Error al cargar contactos:', error));;
}

function enviarContacto() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre === "" || apellido === "" || telefono === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const url = 'https://www.raydelto.org/agenda.php';
    const data = {
        nombre: 'MiNombre',
        apellido: 'MiApellido',
        telefono: 'MiTelefono'
    };
    fetch(url, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}