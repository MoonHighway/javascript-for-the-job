function printThis() {
  console.log(this);
}

const desolationTrip = {
  destination: "Desolation Wilderness",
  length: 10,
  backpackers: ["Kathy"],
};

const printDeso = printThis.bind(desolationTrip);

printDeso();
desolationTrip.destination = "Red Peak";
printDeso();
