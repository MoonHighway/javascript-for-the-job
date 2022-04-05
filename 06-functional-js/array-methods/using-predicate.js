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

//
//  One
//

let result = inventory.some((item) => item.price < 100);
console.log("one: ", result);

//
// Two
//

function predicate(item) {
  return item.price < 1;
}
result = inventory.some(predicate);
console.log("two: ", result);

//
// Three
//

const under1K = (item) => item.price < 1000;
result = inventory.every(under1K);
console.log("three: ", result);

//
// Four
//

const under100 = (item) => item.price < 100;
const isEquipment = (item) => item.type === "equipment";

result = inventory.every(under100);
console.log("four: ", result);
result = inventory.every(isEquipment);
console.log("four: ", result);

//
// Five
//

result = inventory.filter(under100);
console.log(result);
result = inventory.filter(isEquipment);
console.log(result);

//
// Six
//

function findByName(name) {
  return function (item) {
    return item.name === name;
  };
}

const findCrampons = findByName("Crampons");
const findAVIOne = findByName("Avalanche Level One");

result = inventory.find(findCrampons);
console.log(result);
result = inventory.find(findAVIOne);
console.log(result);

//
// Seven
//

result = inventory.find(findByName("MoonHighway Buff"));

console.log(result);
