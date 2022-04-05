class Person {
  name;
  isEmployee = false;
  isManager = false;
  hours = 0;
  money = 0;
  shoppingList = [];

  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours;
    this.money = builder.money;
    this.shoppingList = builder.shoppingList;
  }

  toString() {
    return JSON.stringify(this, null, 2);
  }
}

class PersonBuilder {
  name;

  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money) {
    this.money = money;
    return this;
  }

  withList(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}

const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
const charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["jeans", "sunglasses"])
  .build();

console.log(sue.toString());
console.log(charles.toString());
