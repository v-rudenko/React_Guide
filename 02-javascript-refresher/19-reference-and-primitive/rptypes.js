const person = {
  name: 'Max'
};

// const secondPerson = person;
const secondPerson = {
  ...person
};

console.log(secondPerson);

person.name = 'Manul'

console.log(secondPerson);
