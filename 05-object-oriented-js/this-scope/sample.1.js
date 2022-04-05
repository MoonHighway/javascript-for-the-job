const lostCoastTrip = {
  destination: "Lost Coast",
  length: 3,
  backpackers: ["Gene", "Phil", "Lou"],
  print() {
    console.log(`
              ${this.destination}
              ===================
              ${this.length} days
              ${this.backpackers.length} backpackers
          `);
  },
};

lostCoastTrip.print();
