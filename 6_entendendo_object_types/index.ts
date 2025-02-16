// 74. Interface com Parâmetro
interface Product {
    name: string,
    price: number,
    isAvailable:true
}

function showProductDetails(prodct:Product){
    console.log(`Nome do procuto é ${prodct.name} e seu preço é ${prodct.price}`);

    if(prodct.isAvailable){
        console.log("Produto está disponível");
    }   
}

const shirt:Product ={
    name:"camisa",
    price:77,
    isAvailable:true
}

showProductDetails(shirt)


// 75. Interface com parâmetro opcional
interface User {
    email:string,
    role?: string
}

function showUserDetails(user:User){
    console.log(`O usuário tem o e-mail: ${user.email}`);

    if(user.role){
        console.log("Tem permissao");   
    }
}

const adm: User = {
    email: "adm@gmail.com",
    role:"Sim"
}

const user: User = {
    email: "user@gmail.com",
}
showUserDetails(user)
showUserDetails(adm)

// 76. Propriedade readonly
interface Car {
    brand:string,
    readonly wheels: number
}

const fusca: Car = {
    brand:"VW",
    wheels: 4
}

console.log(fusca);
// fusca.wheels = 5;

// 77. Index signature
interface CorrdObject {
    [index: string]:number
}

// 78. Extending Types:
interface Human {
    name:string,
    age:number
}

interface SuperHuman extends Human{
    superPowers: string[]
}

const eduardo: Human = {
    name:"Eduardo",
    age: 22
}

const superMan:SuperHuman = {
    superPowers: ['Voar',"Soltar lazer"],
    name: "Matheus",
    age: 10
}

// 79. Intersection Types
interface Hero {
    name:string
}

interface Gun {
    gun:string
    material: string
}

type HeroAndYourGun = Hero & Gun

const americaCaptain:HeroAndYourGun = {
    name:"Capitão américa",
    gun: "Escudo",
    material:"Adamantium"
}

// 80. readOnlyArray
let myArray:ReadonlyArray<string> = ["Maçã","Banana","Pera"]

// 81. Tuplas
type fiveNumbers = [number,number,number,string]
const myNumberArray:fiveNumbers = [1,2,3,"oi"]
console.log(myNumberArray[0]);
myNumberArray[0]=99
console.log(myNumberArray[0]);

// 82. Tuplas com readOnly
function showNumbers(numbers:readonly [number, number,string]){
    console.log(numbers);
    console.log(numbers[1]);
}

showNumbers([1,2,''])
showNumbers([1,3,'d'])









