const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  print() {
    console.log(`
          ${agenda.name.toUpperCase()}
          ===========================
          taught by ${agenda.instructor.name} from ${
      agenda.instructor.hometown
    }
          topics: ${agenda.topics.join(", ")}
      `);
  }
};

// for (let key in agenda) {
//   if (typeof agenda[key] === "function") {
//     agenda[key]();
//   }
// }

const keys = Object.keys(agenda);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  console.log(agenda[keys[i]]);
}
