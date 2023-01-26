const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var copyButton = document.getElementById("copyButton");
var h1 = document.getElementById("h1");
var h3 = document.getElementById("h3");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage= "none"
    mensaje.style.display="block"
    h1.style.display="none"
    h3.style.display="none"
    copyButton.style.display="block"

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],  ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
   
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],  ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}


// Crear una función para copiar el texto
function copyText() {
    // Seleccionar el texto dentro del textArea
    mensaje.select();
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Mostrar un mensaje de confirmación
    alert("Texto copiado al portapapeles!");
}

// Asignar la función copyText al evento "click" del botón de copiar
var copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyText);
//console.table(matrizCodigo)