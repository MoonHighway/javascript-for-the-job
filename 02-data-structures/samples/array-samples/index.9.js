const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

for (let i = 0; i < myList.length; i++) {
  console.log(`${i}: ${myList[i]}`);
}

// Reverse the Array

for (let i = myList.length - 1; i >= 0; i--) {
  console.log(`${i}: ${myList[i]}`);
}
