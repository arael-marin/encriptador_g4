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
                textoSalida += "ufat";
                break;
            default:
                textoSalida += textoEntrada[i];
        }
    }
    document.getElementById("texto-salida").value = textoSalida;
}

function desencriptar() {
  var textoEntrada = document.getElementById("texto-entrada").value;
  var textoSalida = "";
  for (var i = 0; i < textoEntrada.length; i++) {
    switch (textoEntrada.substring(i, i + 20)) {
      case "enter":
        textoSalida += "e";
        i += 4;
        break;
      case "imes":
        textoSalida += "i";
        i += 3;
        break;
      case "ai":
        textoSalida += "a";
        i += 1;
        break;
      case "ober":
        textoSalida += "o";
        i += 3;
        break;
      case "ufat":
        textoSalida += "u";
        i += 3;
        break;
      default:
        textoSalida += textoEntrada[i];
    }
  }
  document.getElementById("texto-salida").value = textoSalida;
}