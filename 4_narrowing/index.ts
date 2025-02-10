// 55. typeof Type guard
function soma(a: string | number | boolean, b: string | number | boolean){
    if(typeof a === 'string' && typeof b === 'string'){
        console.log('tipo string detectado');
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if(typeof a === 'number' && typeof b === 'number'){
        console.log('tipo number detectado');
        
        console.log(a+b);
    }
    else{
        console.log('Impossivel fazer a soma!');
        
    }
}

soma("2",'2')

// 56. Checando se o valor existe
function operations(arr:number[], operation?: string | undefined){
    if(operation){
        if(operation === 'sum'){
            let op = arr.reduce((i, total) => i + total)
            console.log(op);
        }
        else if(operation === 'multiply'){
            let op = arr.reduce((i, total) => i * total)
            console.log(op);
        }
    }
    else{
        console.log(operation);
    }
}

operations([2,2,6], 'multiply')


// 57. Operador instanceof
class User {
   name
   
   constructor(name:string){
      this.name = name
   }
}

class SuperUser extends User{
   constructor(name:string){
    super(name)
   } 
}

const jhon = new User('Jhon')
const paul = new SuperUser('Paul')

console.log(jhon);
console.log(paul);

function userGreeting(user: Object){
    if(user instanceof User){
        console.log(`bem vindo ${user.name}`);
    }
    else if(user instanceof SuperUser){
        console.log(`bem vindo ${user.name}`);
        
    }
}

userGreeting(paul)


// 57. operador in
class Dog{
    name
    bread

    constructor(name:string, bread?:string){
        this.name = name
        if(bread){
            this.bread = bread
        }
    }
}

const zeca = new Dog('Zeca')
const bob = new Dog('Bob','Labrador')

function showDogDetails(dog:Dog){
    if('bread' in dog){
        console.log(dog.bread);
    }
    else{
        console.log('Sem raça definida');
    }
}

showDogDetails(zeca)
showDogDetails(bob)



// desafio 3

type REVIEW =  1 | 2 | 3 | 4 | 5  | boolean

function reviewChange(review?:REVIEW){
    if(typeof review === 'number' && review){
        console.log(`A nota alcançada foi ${review}`);
    }
    else{
        review = false
        console.log(review);
    }
}

reviewChange()