class Store {
  name;
  totalSales = 0;
  #inventory = [];

  get count() {
    return this.#inventory.length;
  }

  constructor(name) {
    this.name = name;
  }

  stock(name, price, amount) {
    for (let i = 0; i < amount; i++) {
      this.#inventory.push({ name, price });
    }
  }

  sell(name) {
    const index = this.#inventory.findIndex((item) => item.name === name);
    if (index === -1) {
      console.log(`item "${name}" is out of stock`);
      return;
    }
    const [item] = this.#inventory.splice(index, 1);
    this.totalSales += item.price;
    console.log(`SOLD: ${item.name}`);
    return item;
  }

  report() {
    console.log(`
    ${this.name}
    =============
      ${this.count} items in stock
      total sales to date: $${this.totalSales}
    `);
  }
}

const myStore = new Store("skis and stuff");

myStore.stock("skis", 799, 1);
myStore.stock("poles", 50, 1);

const pairOfSkis = myStore.sell("skis");
const poles = myStore.sell("poles");

myStore.report();

myStore.sell("skis");
