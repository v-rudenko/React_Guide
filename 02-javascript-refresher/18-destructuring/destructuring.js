console.log('destructuring');
console.log('-------------------------------');

[a, b] = ['Hello', 'Viktor'];

console.log(a);
console.log(b);


console.log('-------------------------------');

const numbers = [1, 2, 3];

// [num1, num2] = numbers; 

const [num1, ,num3] = numbers;             // робимо пропуск одного елемента

console.log(num1, num3);


console.log('-------------------------------');

// const {name} = {name: 'Max', age: 28};   // Можна і один елемент висмикнути
const {name, age} = {name: 'Max', age: 28};

console.log(name, age);


console.log('-------------------------------');