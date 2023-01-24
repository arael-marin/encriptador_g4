document.getElementById("formulario").addEventListener("submit", function (event){
    event.preventDefault();

var mensaje=document.getElementById("mensaje").value;

var mensajeEncriptado=btoa(mensaje);

alert (mensajeEncriptado);
});