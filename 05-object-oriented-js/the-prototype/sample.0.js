function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

const desoTrip = new Vacation("Desolation Wilderness", 10);

console.log(typeof desoTrip);
console.log(typeof Vacation);
console.log(desoTrip instanceof Vacation);

console.log(desoTrip);
