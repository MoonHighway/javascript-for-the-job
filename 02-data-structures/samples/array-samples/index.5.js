const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

const thirdItem = myList.splice(2, 1);

console.log(thirdItem);
console.log(myList);

myList.splice(1, 0, "pack mobile kitchen");
console.log(myList);
