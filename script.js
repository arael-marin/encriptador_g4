// primer codigo de javasript de encriptador 

// document.getElementById("formulario").addEventListener("submit", function (event){
//     event.preventDefault();

// var mensaje=document.getElementById("mensaje").value;

// var mensajeEncriptado=btoa(mensaje);

// alert (mensajeEncriptado);
// });

function encriptar(){
    var textoEntrada = document.getElementById("texto-entrada").value;
    var textoSalida = "";
    for (var i = 0; i< textoEntrada.length; i++){
        switch (textoEntrada[i]){
            case "e":
                textoSalida += "enter";
                break;
            case "i":
                textoSalida += "imes";
                break;
            case "a":
                textoSalida += "ai";
                break;
            case "o":
                textoSalida += "ober";
                break;
            case "u":
                textoSalida += "ofat";
                break;
            default:
                textoSalida += textoEntrada[i];
        }
    }
    document.getElementById(texto-salida).value = textoSalida;
}

function desencriptador(){
    var textoEntrada= document.getElementById(texto-entrada).value;
    var textoSalida="";
    var palabraActual="";
    for (var i =0; i< textoEntrada.length; i++){
        palabraActual += textoEntrada[i];
            switch (palabraActual){
                case "enter":
                    textoSalida += "e";
                    palabraActual = "";
                    break;
                case "imes":
                    textoSalida += "i";
                    palabraActual = "";
                    break;
                case "ai":
                    textoSalida += "a";
                    palabraActual = "";
                    break;
                case "ober":
                    textoSalida += "o";
                    palabraActual = "";
                    break;
                case "ufat":
                    textoSalida += "u";
                    palabraActual = "";
                    break;
            }
    }
    document.getElementById("texto-salida").value=textoSalida;
}