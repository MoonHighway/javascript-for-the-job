class Iterator {
  #index = 0;
  #items = [];

  constructor(items = []) {
    this.#items = items;
  }

  first() {
    return this.#items[0];
  }

  last() {
    return this.#items[this.#items.length - 1];
  }

  hasNext() {
    return this.#index < this.#items.length - 1;
  }

  current() {
    return this.#items[this.#index];
  }

  next() {
    if (this.hasNext()) {
      this.#index += 1;
    }
    return this.current();
  }

  prev() {
    if (this.#index !== 0) {
      this.#index -= 1;
    }
    return this.current();
  }
}

const skiGear = new Iterator([
  "skis",
  "poles",
  "boots",
  "googles",
  "helmet",
  "buff",
  "headphones",
  "gloves",
]);

console.log(skiGear.current());
console.log(skiGear.next());
console.log(skiGear.current());

skiGear.next();
skiGear.next();
skiGear.next();
skiGear.prev();

console.log(skiGear.current());
