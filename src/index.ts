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

// class Fruit {
//     fId: number|string;
//     name: string;
//     color: string;
//     price: number;

//     constructor(id:number|string , name:string, color:string, price:number){
//         this.fId=id,
//         this.name=name,
//         this.color=color,
//         this.price=price
//     }
// }

// const apple = new Fruit (1, 'Apple', 'Green', 20);
// const orange = new Fruit (2, 'Orange', 'Orange', 15);
// console.dir(apple);
// console.dir(orange);


// Class interfaces and Access Modifiers

// interface StudetInterface{
//     s_id:string;
//     firstName: string;
//     lastName: string;
//     dept: string;
//     changeDept(dept:string): void;
// }

// class Student implements StudetInterface {
//     s_id: string = '0'; //default
//     firstName: string;
//     lastName:string;
//     dept: string;

//     constructor (id:string, firstName:string, lastName: string, dept: string){
//         this.s_id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dept = dept;
//     }

//     changeDept(dept:string){
//         this.dept = dept;
//     }
// }

// const milton = new Student('15X1', 'Jhon', 'Milton', 'Literature');
// console.dir(milton);
// milton.changeDept('EEE');
// console.dir(milton);
// // milton.dept='CSE'; // Error beacuse private members cannot be modified outside the class


// Class inheritence

// Access Modifiers: 'protected' members can be used within the base class itself and within subclass
//                   'private' members can only be accessed inside the base class itself . Note: use getters and setters methode to modify/access private members
 
class Person {
    id: number;
    name: string;

    constructor(id:number, name: string){
        this.id=id;
        this.name=name;
    }

    protected printPerson(){
        return `${this.name}'s id is ${this.id}`; //
    }
    printPerson2(){
        this.printPerson();
    }
}

const person1= new Person(907, 'Monica');
person1.printPerson2();

class Employee extends Person {
    post: string;
    salary: number;
    constructor(id:number, name: string, post: string, salary: number){
        super(id, name);
        this.post= post;
        this.salary= salary;
    }

    printPerson3(){
        this.printPerson();
    }
}

const james = new Employee(302, 'James', 'Executive', 50000);
console.log(james.printPerson2());


// Generics --> Dynamic type

function getArray(items:any[]):any[]{
    return new Array().concat(items)
}

let strArray = getArray(['hello', 'world', 1]);// can have numbers
let numArray = getArray([7, 13 , 5, 9, 'Jack']); // can have string

function getArrayV2<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let strArrayV2 = getArrayV2 <string> (['hello', 'world']);// can only have strings
let numArrayV2 = getArrayV2 <number> ([7, 13 , 5, 9]); // can only have numbers







