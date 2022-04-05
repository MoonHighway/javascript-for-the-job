//
// Part One
//
const location = {
  building: "C",
  room: "valley view"
};

const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    ...location,
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  ...location
};

//
// Part Two
//

// const location = {
//     name: "Tahoe Campus",
//     building: "C",
//     room: "valley view"
//   };

//   const agenda = {
//     name: "JavaScript Jungle",
//     maxParticipants: 20,
//     topics: ["browser", "node", "http"],
//     instructor: {
//       ...location,
//       name: "Alex Banks",
//       hometown: "Tahoe City"
//     },
//     ...location
//   };

// console.log(agenda);

//
// Part 3: Order Matters!
//

// const agenda = {
//     ...location,
//     name: "JavaScript Jungle",
//     maxParticipants: 20,
//     topics: ["browser", "node", "http"],
//     instructor: {
//       name: "Alex Banks",
//       hometown: "Tahoe City",
//       ...location
//     }
//   };
