"use strict";
// 55. typeof Type guard
function soma(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log('tipo string detectado');
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log('tipo number detectado');
        console.log(a + b);
    }
    else {
        console.log('Impossivel fazer a soma!');
    }
}
soma("2", '2');
// 56. Checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            let op = arr.reduce((i, total) => i + total);
            console.log(op);
        }
        else if (operation === 'multiply') {
            let op = arr.reduce((i, total) => i * total);
            console.log(op);
        }
    }
    else {
        console.log(operation);
    }
}
operations([2, 2, 6], 'multiply');
// 57. Operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof User) {
        console.log(`bem vindo ${user.name}`);
    }
    else if (user instanceof SuperUser) {
        console.log(`bem vindo ${user.name}`);
    }
}
userGreeting(paul);
// 57. operador in
class Dog {
    constructor(name, bread) {
        this.name = name;
        if (bread) {
            this.bread = bread;
        }
    }
}
const zeca = new Dog('Zeca');
const bob = new Dog('Bob', 'Labrador');
function showDogDetails(dog) {
    if ('bread' in dog) {
        console.log(dog.bread);
    }
    else {
        console.log('Sem raça definida');
    }
}
showDogDetails(zeca);
showDogDetails(bob);
function reviewChange(review) {
    if (typeof review === 'number' && review) {
        console.log(`A nota alcançada foi ${review}`);
    }
    else {
        review = false;
        console.log(review);
    }
}
reviewChange();
