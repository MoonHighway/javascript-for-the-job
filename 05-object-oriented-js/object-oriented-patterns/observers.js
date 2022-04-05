class Store {
  name;
  #subscribers = [];

  constructor(name) {
    this.name = name;
  }

  subscribe(observer) {
    this.#subscribers.push(observer);
  }

  sale(discount) {
    for (let i = 0; i < this.#subscribers.length; i++) {
      this.#subscribers[i].notify(this.name, discount);
    }
  }
}

class Shopper {
  name;

  constructor(name) {
    this.name = name;
  }

  notify(storeName, discount) {
    console.log(
      `${this.name}, there is a sale at ${storeName}! ${discount}% off everything!`
    );
  }
}

const catsAndThings = new Store("Cats & Things");
const insAndOuts = new Store("Ins and Outs");

const alex = new Shopper("Alex");
const eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);

insAndOuts.subscribe(sharon);

catsAndThings.sale(20);
insAndOuts.sale(50);
