/* Criar uma função que recebe um número e retorna "Par" ou "Ímpar"; */

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Número é Par";
    } else {
        return "Número é Impar";
    }
}
console.log(parOuImpar(7));
console.log(parOuImpar(10));