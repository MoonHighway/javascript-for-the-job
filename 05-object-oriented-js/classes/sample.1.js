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

class Expedition extends Vacation {
  survivalRate = 0.0;
  items = [];

  constructor(destination, length, survivalRate) {
    super(destination, length);
    this.survivalRate = survivalRate;
  }

  addItem(item) {
    this.items.push(item);
  }
}

const desoTrip = new Expedition("Desolation Wilderness", 10, 0.5);

console.log(desoTrip);
