const instrument = {
  type: "guitar",
  price: 99.99,
  owner: {
    name: "Jim",
    level: "expert"
  }
};

console.log(
  `The ${instrument.type} is owned by ${instrument.owner.name}.`
);

if (instrument.owner.level == "expert") {
  console.log("Shred on");
} else {
  console.log("Take some lessons");
}
