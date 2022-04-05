function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.travelers = [];
}

Vacation.prototype.addTraveler = function (name) {
  this.travelers.push(name);
};

const desoTrip = new Vacation("Desolation Wilderness", 10);

console.log(desoTrip);

//
// THERE IS A BETTER WAY TO WRITE THIS...
//
