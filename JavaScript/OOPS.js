const car = {// this is a object
  make: "Volkswagen",
  model: "Golf",
  year: 2026,
  color: "blue",
  priceUSD: 40000,
  // a method is just a function assigned to a property
  applyDiscount: function(discountPercentage) {
    const multiplier = 1 - discountPercentage / 100;
    this.priceUSD *= multiplier;
  },
  // shorthand way to add a method to an object literal
  getSummary() {
    return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at $${this.priceUSD} (USD).`;
  },
};
console.log(car.getSummary())

function Player(name, marker) {// this is object constructor function
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}
const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs "steve"
player2.sayName(); // logs "also steve"

function Book(title, author, pages, read){
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read,

    this.info=function(){
        conslode.lof(`${title} by ${author}, ${pages} pages, ${read} yet`)
    }
}
console.log(Object.getPrototypeOf(player1))