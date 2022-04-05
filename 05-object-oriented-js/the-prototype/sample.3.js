function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.travelers = [];
}

Vacation.prototype.addTraveler = function () {
  this.travelers.push(name);
};

function Expedition(destination, length, survivalRate) {
  Vacation.call(this, destination, length);
  this.survivalRate = survivalRate;
  this.equipment = [];
}

Expedition.prototype = Object.create(Vacation.prototype);

Expedition.prototype.addItem = function (item) {
  this.equipment.push(item);
};

const desoTrip = new Expedition("Desolation Wilderness", 10, 0.5);

desoTrip.addTraveler("Alex");
desoTrip.addTraveler("Eve");

desoTrip.addItem("Tent");

console.log(desoTrip instanceof Expedition);
console.log(desoTrip instanceof Vacation);

console.log(desoTrip);
