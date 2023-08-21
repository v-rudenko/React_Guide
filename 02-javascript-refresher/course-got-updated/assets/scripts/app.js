function createGreeting(userName, message = "Hello!") {
  // console.log(userName);
  // console.log(message);

  return "Hi, I am " + userName + ". " + message;
}

const greeting = createGreeting("Viktor");

console.log(greeting);

