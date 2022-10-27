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

// function onClick(event) {
//     search();
//     event.preventDefault();

//     const mensaje = {
//         nombre: document.getElementById("nombre").value,
//         email: document.getElementById("email").value,
//         celular: document.getElementById("celular").value,
//         provincia: document.getElementById("provincia").value,
//         comentario: document.getElementById("comentario").value,
//         send: document.getElementById("send").value

//     };
//     console.log(mensaje);

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify(mensaje),
//         headers: { "Content-type": "application/json; charset=UTF-8" },
//     })
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json);
//             Swal.fire(
//                 "Mensaje enviado",
//                 "Gracias por tu comentario " + mensaje.name,
//                 "success"
//             );
//             cleanForm();
//             /* redirectUrl(); */
//         })
//         .catch((err) => console.log(err));
// }
// function cleanForm() {
//     let formulario = document.getElementById("formulario");
//     formulario.reset();
// }
// function redirectUrl() {
//     window.location.href = "https://google.com";
// }

// let boton = document.getElementById("send");
// boton.addEventListener("click", onClick);








/*API BUSQUEDA */

/*Busque ubicaciones u hoteles por nombre*/
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f9d7b609d4msh8be24ee8f9fb70ep106e65jsna430163a0f5b',
// 		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
// 	}
// };

// fetch('https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=es-ar&name=Berlin', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// .catch(err => console.error(err));
const getValueInput = () => {
    let inputValue1 = document.querySelector("#name-location-hotel").value;
    console.log(inputValue1);
}


const API_URL = "https://booking-com.p.rapidapi.com";

const HTMLResponse = document.getSelector("#app");

fetch(`${API_URL}/hotels`)
    .then((response) => response.json())
    .then((hotels) => {
        const tpl = hotels.map(hotel => `<li>${hotel.name} 🏨${hotel.hotels}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>` 
    });



//const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if (this.readyState === 4 && this.status === 200) {
//         const data = JSON.parse(this.response);
//         const HTMLResponse = document.querySelector("#app");

//         const tpl = data.map(hotel => `<li>${hotel.name} 🏨${hotel.hotels}</li>`);
//         HTMLResponse.innerHTML =  `<ul> ${tpl} </ul>`

//     }
// }
// xhr.addEventListener("load", onRequestHandler());
// xhr.open("GET", `${API_URL}/hotels`);
// xhr.send()
