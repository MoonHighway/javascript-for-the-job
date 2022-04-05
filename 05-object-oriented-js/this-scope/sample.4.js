function printThis(message, separator) {
  console.log(message, "\n", separator);
  console.log(this);
}

const lostCoastTrip = {
  destination: "Lost Coast",
  length: 3,
  backpackers: ["Gene", "Phil", "Lou"],
};

const desolationTrip = {
  destination: "Desolation Wilderness",
  length: 10,
  backpackers: ["Kathy"],
};

printThis.call(lostCoastTrip, "Trip with the Boys", "==============");
printThis.apply(desolationTrip, ["Going to find myself", "--------------"]);
