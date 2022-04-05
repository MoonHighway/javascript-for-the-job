const peaks = [
  {
    name: "Ralston",
    elevation: 9239,
    wilderness: "Desolation",
  },
  {
    name: "Needle",
    elevation: 8971,
    wilderness: "Granite Chief",
  },
  {
    name: "Tallac",
    elevation: 9738,
    wilderness: "Desolation",
  },
  {
    name: "Granite Chief",
    elevation: 9006,
    wilderness: "Granite Chief",
  },
  {
    name: "Relay",
    elevation: 10338,
    wilderness: "Mt Rose",
  },
];

const over = (elevation) => (peak) => peak.elevation > elevation;
const under = (elevation) => (peak) => peak.elevation < elevation;

console.log(peaks.every(over(5000)));
console.log(peaks.filter(over(9500)));

console.log(
  peaks
    .filter(over(9000))
    .map((peak) => peak.name)
    .join(", ")
);
