let id:number = 5; // let id = 5 will infer to number. id = 'ads' will prompt an error
let id2:number = 10;
let first_name:string='James';
let isMount:boolean = true;

let groceries: string[] = ['apple', 'tomato'];

//Tuple
let person: [number, string, boolean]= [56, 'sam', true];
//Tuple Array
let employee: [number, string][]
employee=[
    [3, 'Alex'],
    [2, 'Crack']
]

//union
let pid: string|number;
pid = '22';

//enum--> set of named constants
//First two are initialised
enum NumbersV1 {
    One=1,
    Two=2,
    Three, //3
    Four,//4
}

enum NumbersV2 {
    One,// 0 
    Two,// 1
    Three,// 2
    Four,// 3
}

// Note: Error--> 'name' also declared here. Reason--> tsconfig.target inject DOM which has a name property

// Object type
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'Jack'
}

// Type Assertion--> 
let cid: any = 1;
let customerId = <number>cid // SAME: let customerId = cid as number

// Functions 
// Function parameter with implicitly typed any will report an 
// erro. To stop this change tsconfig.noImplicitAny: false [default true]

// let addNumV1 = (x,y)=>{
//     return x+y;
// }

let addNumV2 = (x:number,y:number):number=>{
    return x+y;
}

// console.log(addNumV2(1,'h')) [This will give an error]

// function return type void
function log(message:string|number):void{
    console.log(message)
}

// Interface
// Difference between Object type and Interface is that Object type is an object reference and interface is an object

interface UserInterface {
   readonly id: number, // Not re-assignable
    name: string,
    age?: number, // optional property. won't report error if left unassigned
}

const userV2: UserInterface = {
    id: 1,
    name: 'Jack'
}

userV2.age = 55;
userV2.name="Max";
// userV2.id=1; // Error: readonly property cannot be reassigned

// Another difference is that we can create custome type with 'type' but interface cannot do that
type point = string|boolean; // Interface doesn't work that way
let p1:point= "Linda";

// Function Interface

interface MathFunc{
    (x:number, y:number):number
}

let multiply:MathFunc = (x,y):number=>{
    return x*y;
}

console.log(multiply(10,6))

// Object Type doesn't work with destructured property. Beacause it will create ambiguity 
// problem with javascript aliases

//#####Ex#####
// function customerInfo({name, age=50 /*default value*/, location}){   //Error
//     return `${name}, is ${age} years old and lives in ${location}`
// }

// let user3 = {
//     name: 'Alex',
//     age: 24,
//     location: 'Vancouver',
// }

// let cInfo = customerInfo(user3);

// Solution
// Use interface for destructured object

// interface CustomerInfo { // For destructured 'user' object
//     name:string,
//     age: number|string,
//     location: string
// }

// interface CInfoFunc{
//     ({}:CustomerInfo):string
// }

// let user3 = {
//     name: 'Alex',
//     age: 24,
//     location: 'Vancouver',
// }

// function customerInfo({name, age=50 /*default value*/, location}:CustomerInfo){   //Error
//     return `${name}, is ${age} years old and lives in ${location}`
// }
// let cInfo = customerInfo(user3);
// console.log(cInfo);


// Class

class Fruit {
    fId: number|string;
    name: string;
    color: string;
    price: number;

    constructor(id:number|string , name:string, color:string, price:number){
        this.fId=id,
        this.name=name,
        this.color=color,
        this.price=price
    }
}

const apple = new Fruit (1, 'Apple', 'Green', 20);
const orange = new Fruit (2, 'Orange', 'Orange', 15);
console.log("Apple: " + apple + "\n" + "Orange: " + orange);

















