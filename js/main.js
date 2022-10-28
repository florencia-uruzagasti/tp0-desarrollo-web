/*Formulario */
function validar() {
    var nombre, apellido, email, celular, provincia, comentario;
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    email = document.getElementById('email').value;
    celular = document.getElementById('celular').value;
    provincia = document.getElementById('provincia').value;
    comentario = document.getElementById('comentario').value;
    expresion = /\w+@\w+\.+[a-z]/;
    /* expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ; */

    if (nombre === "" || apellido === "" || email === "" || comentario === "") {
        alert("Faltan campos obligatorios");
        return false;
    }
    else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellido.length > 80) {
        alert("El Apellido es muy largo");
        return false;
    }
    else if (email.length > 100) {
        alert("El email es muy largo");
        return false;
    }
    else if (!expresion.test(email)) {
        alert("El email NO es valido");
        return false;
    }
    else if (isNaN(celular)) {
        alert("El telefono ingresado no contiene solo numeros");
        return false;
    }
}
/* metodo post */

function onClick(event) {
    /*search();*/
    event.preventDefault();

    const mensaje = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        provincia: document.getElementById("provincia").value,
        comentario: document.getElementById("comentario").value,
    };
    console.log(mensaje);
    /*Promesa */
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                "Mensaje enviado",
                "Gracias por tu comentario " + mensaje.nombre,
                "success"
                );
                cleanForm();
            /* redirectUrl(); */
        })
        .catch((err) => console.log(err));
}
function cleanForm() {
    let formulario = document.getElementById("formulario");
    formulario.reset();
}
function redirectUrl() {
    window.location.href = "https://google.com";
}

let boton = document.getElementById("send");
boton.addEventListener("click", onClick);



