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
var Fruit = /** @class */ (function () {
    function Fruit(id, name, color, price) {
        this.fId = id,
            this.name = name,
            this.color = color,
            this.price = price;
    }
    return Fruit;
}());
var apple = new Fruit(1, 'Apple', 'Green', 20);
var orange = new Fruit(2, 'Orange', 'Orange', 15);
console.log("Apple: " + apple + "\n" + "Orange: " + orange);
