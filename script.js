// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

const texto=document.querySelector(".seccion1texttarea");
const mensaje=document.querySelector(".seccion2mensaje");
const imagen=document.querySelector(".seccion2img");
const info=document.querySelector(".seccion2info");
const copiarbtn=document.querySelector(".botoncopiar");

texto.value="";
mensaje.value="";
// funcion para encriptar texto
function encriptar (textoEncriptado){
  let llavesEncriptacion =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  textoEncriptado = textoEncriptado.toLowerCase();
  for (let i = 0; i < llavesEncriptacion.length; i++){
    if (textoEncriptado.includes(llavesEncriptacion[i][0])){
      textoEncriptado=textoEncriptado.replace.All(llavesEncriptacion[i][0],llavesEncriptacion[i][1]);
    }
  }
  return textoEncriptado;
}
