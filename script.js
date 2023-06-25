const criptografar = (texto) => {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      resultado += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      resultado += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
    } else {
      resultado += texto.charAt(i);
    }
  }
  return resultado;
};

const descriptografar = (texto) => {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      resultado += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      resultado += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
    } else {
      resultado += texto.charAt(i);
    }
  }
  return resultado;
};

const form = document.getElementById("form");
const textoOriginalInput = document.getElementById("texto-original");
const textoResultadoTextarea = document.getElementById("texto-resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const textoOriginal = textoOriginalInput.value.trim();
  const operacao = document.getElementById("operacao").value;
  let resultado = "";
  if (operacao === "criptografar") {
    resultado = criptografar(textoOriginal);
  } else if (operacao === "descriptografar") {
    resultado = descriptografar(textoOriginal);
  }
  textoOriginalInput.value = resultado;
});
