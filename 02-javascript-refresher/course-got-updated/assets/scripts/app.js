// // function createGreeting(userName, message = "Hello!") {
// //   // console.log(userName);
// //   // console.log(message);

// //   return "Hi, I am " + userName + ". " + message;
// // }

// // const greeting = createGreeting("Viktor");

// // console.log(greeting);

// const user = {
//   name: "Віктор",
//   age: 24,
//   greet() {
//     console.log("Привіт!")
//     console.log(this.age)
//     console.log(user.age)
//   }
// }

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();


const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0])

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index)