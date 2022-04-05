const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  }
};

//
// Part One
//

for (let key in agenda) {
  console.log(key);
}

//
// Part Two
//

// for (let key in agenda) {
//   console.log(typeof agenda[key]);
//   console.log(agenda[key]);
// }
