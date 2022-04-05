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

const wildernessPeaks = peaks.reduce((hash, peak) => {
  if (!hash[peak.wilderness]) {
    hash[peak.wilderness] = peak.name;
    return hash;
  }

  hash[peak.wilderness] = [
    ...hash[peak.wilderness].split(", "),
    peak.name,
  ].join(", ");

  return hash;
}, {});

console.log(wildernessPeaks);
