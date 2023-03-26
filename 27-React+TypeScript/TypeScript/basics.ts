// Primitives: number, string, boolean
// More complex types: arrays objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Viktor";

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Viktor",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference

let course: string | number = "React with Typescript";

course = 1234;

// Functions & types

function add (a: number, b: number): number | string {
  return a + b;
}

function Print(value:any) {
  console.log(value);
}

Print("Бабун")
console.log("Бабун")