"use strict";
// 31. Arrays
let numbers = [1, 2, 3];
numbers.push(5); // adiciona
console.log(numbers);
console.log(numbers[1]);
let strings = ['Jurca', 'Jureca', 'Eduardo gostoso'];
strings.push('');
console.log(strings);
// 32. Outra sintaxe Arrays
const nums = [100, 200];
// 33. Tipo Any
const arr = [1, 'teste', true, [1, 2, 34]];
// 34. Tipos de parâmetros
function soma(a, b) {
    console.log(a + b);
}
// soma(2,2)
// 35. Tipos de retorno
function exibir(a) {
    return a;
}
console.log(exibir('teste retorno'));
// 36. Funções anónimas
setTimeout(function () {
    console.log('oi');
}, 2000);
// 37. Tipos de objetos
const objCoord = {
    x: 394,
    y: 279.9
};
function passCords(coord) {
    console.log(coord.x);
    console.log(coord.y);
}
passCords(objCoord);
// 38. propriedades opcionais
function showNumbers(a, b) {
    console.log(a);
    if (b) {
        console.log(b);
    }
}
showNumbers(2, 4);
showNumbers(1);
