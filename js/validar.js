function validar(){
    var nombre,apellido,email,celular,provincia,comentario;
    nombre=document.getElementById('nombre').value;
    apellido=document.getElementById('apellido').value;
    email=document.getElementById('email').value;
    celular=document.getElementById('celular').value;
    provincia=document.getElementById('provincia').value;
    comentario=document.getElementById('comentario').value;
    expresion= /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellido=== "" || email === "" || comentario=== ""){
        alert("Faltan campos obligatorios");
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellido.length>80){
        alert("El Apellido es muy largo");
        return false;
    }
    else if(email.length>100){
        alert("El email es muy largo");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El email NO es valido");
        return false;
    }
    else if(isNaN(celular)){
        alert("El telefono ingresado no contiene solo numeros");
        return false;
    }
    

}
