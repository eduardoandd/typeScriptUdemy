"use strict";
function showProductDetails(prodct) {
    console.log(`Nome do procuto é ${prodct.name} e seu preço é ${prodct.price}`);
    if (prodct.isAvailable) {
        console.log("Produto está disponível");
    }
}
const shirt = {
    name: "camisa",
    price: 77,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log("Tem permissao");
    }
}
const adm = {
    email: "adm@gmail.com",
    role: "Sim"
};
const user = {
    email: "user@gmail.com",
};
showUserDetails(user);
showUserDetails(adm);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
const eduardo = {
    name: "Eduardo",
    age: 22
};
const superMan = {
    superPowers: ['Voar', "Soltar lazer"],
    name: "Matheus",
    age: 10
};
const americaCaptain = {
    name: "Capitão américa",
    gun: "Escudo",
    material: "Adamantium"
};
// 80. readOnlyArray
let myArray = ["Maçã", "Banana", "Pera"];
const myNumberArray = [1, 2, 3, "oi"];
console.log(myNumberArray[0]);
myNumberArray[0] = 99;
console.log(myNumberArray[0]);
// 82. Tuplas com readOnly
function showNumbers(numbers) {
    console.log(numbers);
    console.log(numbers[1]);
}
showNumbers([1, 2, '']);
showNumbers([1, 3, 'd']);
