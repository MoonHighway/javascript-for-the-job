function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.travelers = [];
}

Vacation.prototype.addTraveler = function () {
  this.travelers.push(name);
};

const desoTrip = new Vacation("Desolation Wilderness", 10);

desoTrip.addTraveler("Alex");
desoTrip.addTraveler("Eve");

console.log(desoTrip);
