// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

const texto=document.querySelector(".seccion1textarea");
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
      textoEncriptado=textoEncriptado.replaceAll(llavesEncriptacion[i][0],llavesEncriptacion[i][1]);
    }
  }
  return textoEncriptado;
}

//funcion para desencriptar texto
function encriptarBtn() {
  const mensajeEncriptado = encriptar(texto.value);
  mensaje.value=mensajeEncriptado;
  mensaje.setAttribute("rows","8");
  texto.value="";
  mensaje.style.backgroundImage="none";
  info.style.display="none";
  copiarbtn.style.display="flex";
  copiarbtn.focus();
}

//funcion para desencriptar texto

function desencriptar(textoDesencriptado){
  let llavesDesencriptacion =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
  textoDesencriptado=textoDesencriptado.toLowerCase();
  for (let i=0; i<llavesDesencriptacion.length; i++){
    if (textoDesencriptado.includes(llavesDesencriptacion[i][0])){
      textoDesencriptado=textoDesencriptado.replaceAll(llavesDesencriptacion[i][0],llavesDesencriptacion[i][1]);
    }
  }
return textoDesencriptado;
}

function desencriptarBtn(){
  const mensajeDesencriptado =desencriptar(texto.value);
  mensaje.value=mensajeDesencriptado;
  mensaje.setAttribute("rows","8");
  texto.value="";
  mensaje.style.backgroundImage="none";
  info.style.display="none";
  copiarbtn.style.display="flex";
  copiarbtn.focus();
}

//funcion para copiar mensaje

// function copiar() {
//   mensaje.select();
//   navigator.clipboard.writeText(mensaje.value);
//   mensaje.value="";
//   info.style.display="block";
//   copiarbtn.style.display="none";
//   mensaje.style.backgroundImage="";
// }

async function copiar(){ 
  try{
    await navigator.clipboard.writeText(mensaje.value);
          mensaje.value="";
          info.style.display="block";
          copiarbtn.style.display="none";
          mensaje.style.backgroundImage="";
  } catch (e) {
    console.log (e);
  }
}
