const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

console.log(myList.length);

const selectedItem = myList.shift();

console.log(selectedItem);
console.log(myList);

myList.shift();
myList.shift();

console.log(myList);

myList.unshift("pack roof tent");
myList.unshift("pack heater");

console.log(myList);
