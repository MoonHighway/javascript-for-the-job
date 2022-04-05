const inventory = [
  {
    name: "Powder Skis",
    price: 999,
    type: "equipment",
    inStock: 7,
  },
  {
    name: "Warm Hoodie",
    price: 50,
    type: "clothes",
    inStock: 15,
  },
  {
    name: "Crampons",
    price: 199,
    type: "equipment",
    inStock: 2,
  },
  {
    name: "Avalanche Level One",
    price: 599,
    type: "course",
    inStock: 100,
  },
  {
    name: "Avalanche Level Two",
    price: 599,
    type: "course",
    inStock: 100,
  },
  {
    name: "MoonHighway Buff",
    price: 5,
    type: "clothes",
    inStock: 4,
  },
];

function looper(array = [], fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i);
  }
}

looper(inventory, (item, i) => {
  console.log(`${i}: ${item.name} $${item.price}`);
});
