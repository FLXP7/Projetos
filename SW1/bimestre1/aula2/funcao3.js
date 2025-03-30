/*
Às vezes, queremos que uma função retorne um resultado em vez de apenas exibir no console.
A função somar(a, b) recebe dois números retorna a soma deles usando: return a + b
Guardamos o valor retornado na variável resultado e exibimosno console. */
function somar(a, b) {
    return a + b;
}
let resultado = somar(5, 15);
console.log("Resultado: " , resultado);