function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.travelers = [];
}

Vacation.prototype.addTraveler = function () {
  this.travelers.push(name);
};

const desoTrip = new Vacation("Desolation Wilderness", 10);

console.log(desoTrip);
console.log(desoTrip.__proto__);

console.log(desoTrip.hasOwnProperty("destination"));
console.log(desoTrip.hasOwnProperty("addTraveler"));
console.log(desoTrip.__proto__.hasOwnProperty("addTraveler"));
