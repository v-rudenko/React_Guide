class NameField {
  constructor(name) {
    const field = document.createElement("li");
    field.textContent = name;
    const nameListHook = document.querySelector("#names");
    nameListHook.appendChild(field);
  }
}

// const addName = () => {alert("hola")}

class NameGenerator {
  constructor() {
    // const addName = () => {alert("hello")}
    const btn = document.querySelector("button");
    this.names = ["Max", "Manu", "Ana"];
    this.currentName = 0;
    btn.addEventListener("click", () => {
      this.addName();
    });
    // btn.addEventListener('click', this.addName.bind(this));
  }

  addName() {
    console.log(this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();
console.log(this)
