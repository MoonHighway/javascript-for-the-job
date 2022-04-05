class Vacation {
  destination;
  length = 0;
  travelers = [];
  #startTime;

  get inProgress() {
    return this.#startTime ? true : false;
  }

  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  addTraveler(name) {
    this.travelers.push(name);
  }

  start() {
    this.#startTime = new Date().toISOString();
    console.log(
      `Setting out into ${this.destination} for ${
        this.length
      } days with ${this.travelers.join(" and ")}`
    );
  }
}

const desoTrip = new Vacation("Desolation Wilderness", 10);

desoTrip.addTraveler("Alex");
desoTrip.addTraveler("Eve");

console.log(desoTrip.inProgress);
desoTrip.start();
console.log(desoTrip.inProgress);
