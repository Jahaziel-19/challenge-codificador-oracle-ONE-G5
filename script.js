// Definición de objeto llaves con claves y valores para la encriptación
const llaves = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
    };
    
// Función para encriptar mensaje
function encriptarMensaje(mensaje) {
    mensaje = mensaje.toLowerCase() // Convierte todas las letras a minúsculas
    mensaje = mensaje.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Reemplaza letras con acentos si las hubiera

    return mensajeMostrado.value = mensaje.split("").map((letra) =>{
        return llaves[letra] || letra;
    }).join(""); // Retorna el mensaje encriptado como string
}


// Función para desencriptar mensaje
function desencriptarMensaje() {
    let mensaje = mensajeEscrito.value.toLowerCase();
    mensaje = mensaje.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let i in llaves){
    mensaje= mensaje.replaceAll(llaves[i],i); // Reemplaza el valor por la clave correspondiente
    }
    return mensajeMostrado.value = mensaje;
}
    
// Selecciona elementos del DOM
var mensajeEscrito = document.querySelector('#mensajeEscrito');
var mensajeMostrado = document.querySelector('#mensajeMostrado');
var mensajeNoEncontrado = document.querySelector('.contenedorMensajeNoEncontrado');

var botonEncriptar = document.querySelector('#botonEncriptar').addEventListener('click', () => {
    mensajeMostrado.style.display = "flex";
    encriptarMensaje(mensajeEscrito.value);

// Verifica si el mensaje está vacío y muestra mensaje
if (mensajeMostrado.value.trim() !== '') {
    mensajeNoEncontrado.style.display = 'none';
} else {
    mensajeNoEncontrado.style.display = 'flex';
}
});

// Botón para desencriptar mensaje
var botonDesencriptar = document.querySelector('#botonDesencriptar').addEventListener('click', () => {
    desencriptarMensaje();
});
    
// Agrega evento para copiar texto al portapapeles
var botonCopiar = document.querySelector('#botonCopiar').addEventListener('click', () => {
    navigator.clipboard.writeText(mensajeMostrado.value);
});
