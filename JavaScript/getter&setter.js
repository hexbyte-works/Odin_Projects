let user = {// an object
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.fullName); // John Smith
user.name="Jhonn"//changing the value
console.log(user.name)
user.fullName = "Alice Cooper";
console.log(user.fullName)