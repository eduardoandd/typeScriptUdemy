// 31. Arrays
let numbers: number[] = [1,2,3]
numbers.push(5) // adiciona
console.log(numbers);
console.log(numbers[1]);

let strings: string[]= ['Jurca','Jureca','Eduardo gostoso']
strings.push('')
console.log(strings);

// 32. Outra sintaxe Arrays
const nums: Array<number> = [100,200]

// 33. Tipo Any
const arr:any = [1,'teste',true, [1,2,34]]

// 34. Tipos de parâmetros
function soma(a:number,b:number){
    console.log(a+b);
}
// soma(2,2)

// 35. Tipos de retorno
function exibir(a:string):string{
    return a
}
console.log(exibir('teste retorno'))

// 36. Funções anónimas
setTimeout(function(){
    console.log('oi');
    
},2000)

// 37. Tipos de objetos
const objCoord = {
    x:394,
    y:279.9,
    z:'zero'

}

function passCords(coord: {x:number, y:number}){
    console.log(coord.x);
    console.log(coord.y);
}
passCords(objCoord)


// 38. propriedades opcionais
function showNumbers(a: number, b?:number){
    console.log(a);
    if(b){
        console.log(b);
        
    } 
}
showNumbers(2,4)
showNumbers(1)


// 39. Validação de parâmetros opcionais
function advancedGreeting(firstName: string, lastName?:string){
    console.log(firstName);
    if(lastName !== undefined){
        console.log(lastName);
    }
}
advancedGreeting('Eduardo','Andrade')
advancedGreeting('Eduardo')

// 40. Union types
let union: string | number
union = 'tESTE' 
union = 2

// 41. avançando com Union types
function unionsCondition(par: string | number){
    if(typeof(par) === 'string'){
        console.log('string');
    }
    else{
        console.log('number');
        
    }
}
unionsCondition(union)

// 42. Type alias
type ID = number | string

function showId(id:ID){
    console.log(id);
}

showId(1)
showId('teste')


// 43. Introdução as interfaces

interface Point {
    x:number
    y:number
    z:number
}

function showCoords(obj:Point){
    console.log(obj.x,obj.y,obj.z); 
}

const coordObj: Point = {
    x: 0,
    y: 0,
    z: 0
}

showCoords(coordObj)

// 44. Type Alias x Interface
    interface Person{
        name:string
    }
    const somePerson:Person = {
        name: 'Eduardo',
        age: 0
    }

    interface Person {
        age:number
    }
    
// 45. Literal types
function showDirection(direction: 'Left' | 'Right' | 'center'){
    console.log(direction);    
}

showDirection('Left')

// 46. Non-null assertion Operator
console.log();

// 47. BigInt
let n:bigint
n=10000n

//48. Symbol
let symbolA:symbol = Symbol('a')
let symbolB:symbol = Symbol('a')

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);















    
 


