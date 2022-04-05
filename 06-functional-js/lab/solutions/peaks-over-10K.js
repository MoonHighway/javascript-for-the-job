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

const over10K = (peak) => peak.elevation > 10000;
const under5K = (peak) => peak.elevation < 5000;

console.log(peaks.some(over10K));
console.log(peaks.some(under5K));

console.log(peaks.filter(over10K));
