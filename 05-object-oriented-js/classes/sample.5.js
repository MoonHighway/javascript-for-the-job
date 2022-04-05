class Vacation {
  destination;
  length = 0;
  #travelers = [];
  #startTime;

  static maxTravelers = 2;
  static suggest() {
    console.log("Hawaii");
    console.log("Italy");
    console.log("New Zealand");
  }

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
    if (this.#travelers.length > Vacation.maxTravelers - 1) {
      console.log("there are too many people on this trip");
      return;
    }
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

Vacation.suggest();

const desoTrip = new Vacation("Desolation Wilderness", 10);

desoTrip.addTraveler("Alex");
desoTrip.addTraveler("Eve");
desoTrip.addTraveler("Phil");
desoTrip.addTraveler("Bill");

desoTrip.start();
