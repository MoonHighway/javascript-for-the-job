class Vacation {
  destination;
  length = 0;
  #travelers = [];
  #startTime;

  get inProgress() {
    return this.#startTime ? true : false;
  }

  get travelers() {
    return `there are ${this.#travelers.length} travelers`;
  }

  set travelers(value) {
    this.#travelers = value.split(",");
  }

  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  addTraveler(name) {
    this.#travelers.push(name);
  }

  start() {
    this.#startTime = new Date().toISOString();
    console.log(
      `Setting out into ${this.destination} for ${
        this.length
      } days with ${this.#travelers.join(" and ")}`
    );
  }
}

const desoTrip = new Vacation("Desolation Wilderness", 10);

console.log(desoTrip.travelers);
desoTrip.travelers = "Phil,Gene,Stu";
console.log(desoTrip.travelers);
desoTrip.start();
