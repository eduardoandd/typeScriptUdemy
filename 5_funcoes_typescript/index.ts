
// 60. Funções sem retorno

function withoutReturn(): void{
    console.log('Essa função n tem retorno');
}

 
// 61. Callback como argumento
function greeting(name:string){
    return `olá ${name}`
}

function preGreeting(f: (name:string) => string, userName:string){
    const greet = f(userName)
    console.log(greet);
}

preGreeting(greeting,'Eduardo')

//62. Generic Functions
function firstElement<T>(arr: T[]): T{
    return arr[0]
}

console.log(firstElement([1,2,true]));
console.log(firstElement(['1','2','3']));

function mergeObject<U,T>(obj1: U, obj2:T){
    return {
        ...obj1,
        ...obj2,
    }
}

const newObject = mergeObject({name: 'Matheus', sobrenome: 'Andrade'}, {age:30, job:'Progammer'})
console.log(newObject);

// 63. constraints nas generics Functions
function biggestNumber<T extends number | string>(a:T, b:T): T{
    let biggest: T

    if(a > b){
        console.log(`+a: ${a}`);
        
        biggest= a
    }
    else{
        console.log(`+b: ${b}`);

        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,10));

// 64. Especificar tipo de argumento
function mergeArrays<T>(arr1:T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1,2,3], ['Teste', 'testando']));

// 65. Parâmetros opcionais
function modernGreeting(name: string, greet?:string){

    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }
    return `${name}, tudo bem?`

}
console.log(modernGreeting('eduardo'));


// 66. Parâmetro default
function somaDefault(n:number, m=10){
    console.log(n+m);
}

somaDefault(10)
somaDefault(10,12)

// 67. Type unknow
function doSomething(x:unknown){
    if(Array.isArray(x)){
        console.log(x);
        
    }
    else{
        console.log(x);
        
    }
}

doSomething(['1',2])

// 68. o tipo never
function showErrorMessage(msg:string):never{
    throw new Error(msg)
}
// showErrorMessage("alguem erro")


// 69. Rest operator com TS
function sumAll(...n:number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,57,78));


// 70. Destructuring com TS
function showProductDetails({name, price} : {name:string, price:number}): string{
    return `O nome do produto é ${name} e ele custa ${price}`
}

const shirt = {name: "camisa", price:49.99}
console.log(showProductDetails(shirt));


 









