function validar (){
    var nombre,email,mensaje;
    nombre = document.getElementById("txtnombre").value;
    email = document.getElementById("txtemail").value;
    mensaje = document.getElementById("txtmensaje").value;
    if(nombre == "")
    {
        alert("Debe ingresar un nombre");
    }
    if(email == "")
    {
        alert("Debe ingresar una direccion de email");
    }
    if(mensaje == "")
    {
        alert("Debe ingresar un mensaje");
    }

}