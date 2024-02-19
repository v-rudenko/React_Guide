// spread operator


const numbers = [1, 2, 3];
let newNumbers = [...numbers, 4];
console.log(newNumbers);
newNumbers = [numbers, 4];
console.log(newNumbers);
newNumbers = [4, ...numbers];
console.log(newNumbers);

console.log("--------------------------");

const Person = {
  name: "Viktor",
};
const newPerson = {
  age: 28,
  ...Person
};

console.log(newPerson);


console.log("--------------------------");

const filter = (...agrs) => {
  return agrs.filter(el => el === 1);

}

console.log(filter(1, 1 ,1));