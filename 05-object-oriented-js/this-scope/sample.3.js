//
// Step 1
//

function printThis() {
  console.log(this);
}

printThis();

const desolationTrip = {
  destination: "Desolation Wilderness",
  length: 10,
  backpackers: ["Kathy"],
  printThis,
};

desolationTrip.printThis();

//
// Step 2
//

// function printThis() {
//   console.log(this);
// }

// const lostCoastTrip = {
//   destination: "Lost Coast",
//   length: 3,
//   backpackers: ["Gene", "Phil", "Lou"],
// };

// const desolationTrip = {
//   destination: "Desolation Wilderness",
//   length: 10,
//   backpackers: ["Kathy"],
// };

// printThis();
// printThis.call(lostCoastTrip);
// printThis.apply(desolationTrip);
