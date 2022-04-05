const resorts = [
  "Jackson Hole",
  "Alpine Meadows",
  "Kirkwood"
];

const data = {};

for (let i = 0; i < resorts.length; i++) {
  let key = resorts[i].toUpperCase().replace(" ", "_");
  data[key] = resorts[i];
}

console.log(data);
