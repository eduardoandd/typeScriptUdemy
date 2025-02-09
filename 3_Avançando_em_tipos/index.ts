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
    y:279.9
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










    
 


