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
          ${this.name.toUpperCase()}
          ===========================
          taught by ${this.instructor.name} from ${
      this.instructor.hometown
    }
          topics: ${this.topics.join(", ")}
      `);
  }
};

const agendaJSON = JSON.stringify(agenda, null, 2);

console.log(agendaJSON);

//
// Part Two
//

// const backToObject = JSON.parse(agendaJSON);

// console.log(backToObject);
