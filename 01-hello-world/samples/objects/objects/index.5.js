const store = {
  name: "Music Metropolis",
  inventory: [
    {
      type: "guitar",
      price: 99.99,
      qty: 2
    },
    {
      type: "piano",
      price: 999.99,
      qty: 1
    },
    {
      type: "finger harp",
      price: 9.99,
      qty: 25
    }
  ]
};

console.log(store.name);
console.log(store.inventory.length);
console.log(
  store.inventory[2].qty * store.inventory[2].price
);
