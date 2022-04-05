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

const namesOnly = inventory.map((item) => item.name);

console.log(namesOnly);
console.log(namesOnly.includes("Crampons"));
console.log(namesOnly.join(", "));

const nameLetterCounts = namesOnly.map((name) => name.length);
console.log(nameLetterCounts);

const isExpensive = (item) => (item.price > 100 ? "expensive" : "affordable");
const report = inventory.map(isExpensive);
console.log(report);

const urls = inventory.map((item) => {
  const route = item.name.trim().toLowerCase().replace(/ /g, "-");
  return `http://myStore.com/inventory/${route}`;
});

console.log(urls);
