const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

console.log(myList.length);

const selectedItem = myList.pop();

console.log(selectedItem);
console.log(myList);

myList.pop();
myList.pop();

console.log(myList);

myList.push("pack roof tent");
myList.push("pack heater");

console.log(myList);
