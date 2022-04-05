const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

const middleItems = myList.splice(2, 3);

console.log(middleItems);
console.log(myList);

const bigList = myList
  .concat(middleItems)
  .concat(middleItems);

console.log(bigList);
