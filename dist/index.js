"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5; // let id = 5 will infer to number. id = 'ads' will prompt an error
var id2 = 10;
var first_name = 'James';
var isMount = true;
var groceries = ['apple', 'tomato'];
//Tuple
var person = [56, 'sam', true];
//Tuple Array
var employee;
employee = [
    [3, 'Alex'],
    [2, 'Crack']
];
//union
var pid;
pid = '22';
//enum--> set of named constants
//First two are initialised
var NumbersV1;
(function (NumbersV1) {
    NumbersV1[NumbersV1["One"] = 1] = "One";
    NumbersV1[NumbersV1["Two"] = 2] = "Two";
    NumbersV1[NumbersV1["Three"] = 3] = "Three";
    NumbersV1[NumbersV1["Four"] = 4] = "Four";
})(NumbersV1 || (NumbersV1 = {}));
var NumbersV2;
(function (NumbersV2) {
    NumbersV2[NumbersV2["One"] = 0] = "One";
    NumbersV2[NumbersV2["Two"] = 1] = "Two";
    NumbersV2[NumbersV2["Three"] = 2] = "Three";
    NumbersV2[NumbersV2["Four"] = 3] = "Four";
})(NumbersV2 || (NumbersV2 = {}));
var user = {
    id: 1,
    name: 'Jack'
};
// Type Assertion--> 
var cid = 1;
var customerId = cid; // SAME: let customerId = cid as number
// Functions 
// Function parameter with implicitly typed any will report an 
// erro. To stop this change tsconfig.noImplicitAny: false [default true]
// let addNumV1 = (x,y)=>{
//     return x+y;
// }
var addNumV2 = function (x, y) {
    return x + y;
};
// console.log(addNumV2(1,'h')) [This will give an error]
// function return type void
function log(message) {
    console.log(message);
}
var userV2 = {
    id: 1,
    name: 'Jack'
};
userV2.age = 55;
userV2.name = "Max";
var p1 = "Linda";
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(10, 6));
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
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.printPerson = function () {
        return this.name + "'s id is " + this.id; //
    };
    Person.prototype.printPerson2 = function () {
        this.printPerson();
    };
    return Person;
}());
var person1 = new Person(907, 'Monica');
person1.printPerson2();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, post, salary) {
        var _this = _super.call(this, id, name) || this;
        _this.post = post;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.printPerson3 = function () {
        this.printPerson();
    };
    return Employee;
}(Person));
var james = new Employee(302, 'James', 'Executive', 50000);
console.log(james.printPerson2());
// Generics --> Dynamic type
function getArray(items) {
    return new Array().concat(items);
}
var strArray = getArray(['hello', 'world', 1]); // can have numbers
var numArray = getArray([7, 13, 5, 9, 'Jack']); // can have string
function getArrayV2(items) {
    return new Array().concat(items);
}
var strArrayV2 = getArrayV2(['hello', 'world']); // can only have strings
var numArrayV2 = getArrayV2([7, 13, 5, 9]); // can only have numbers
