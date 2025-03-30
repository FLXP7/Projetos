/* Podemos passar valores para a função (chamados de parâmetrps) e usá-los dentro do código.
Neste exemplo, vamos criar uma função saudacao(nome), onde nome é um parâmetro.
Quando chamamos saudacao("Carlos"), ele substitui nome por "Carlos".
*/
function saudacao(nome) {
    console.log('Olá ${nome}", seja bem vindo(a)!');
}