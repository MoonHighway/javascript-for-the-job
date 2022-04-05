class Vacation {
  destination;
  length = 0;
  travelers = [];

  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  addTraveler(name) {
    this.travelers.push(name);
  }
}

const desoTrip = new Vacation("Desolation Wilderness", 10);

console.log(desoTrip);
