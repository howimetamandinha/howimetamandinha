function verificarPalindromo(texto) {
    const textoLimpo = texto.replace(/[\s]/g, "").toLowerCase();
    const textoInvertido = textoLimpo.split("").reverse().join("");
    return textoLimpo === textoInvertido;
}
