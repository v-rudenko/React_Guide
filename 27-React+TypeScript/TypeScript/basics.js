// Primitives: number, string, boolean
// More complex types: arrays objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var userName;
userName = "Viktor";
var isInstructor;
isInstructor = false;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
var person;
person = {
    name: "Viktor",
    age: 32,
};
// person = {
//   isEmployee: true,
// };
var people;
// Type inference
var course = "React with Typescript";
course = 1234;
// Functions & types
function add(a, b) {
    return a + b;
}
function Print(value) {
    console.log(value);
}
Print("Бабун");
console.log("Бабун");
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
;
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
