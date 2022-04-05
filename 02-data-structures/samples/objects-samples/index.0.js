const location = {
  building: "C",
  room: "valley view"
};

const agenda = {
  name: "JavaScript Fun!",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  print() {
    console.log(`
      ${agenda.name.toUpperCase()}
      ========
      taught by ${agenda.instructor.name} from ${
      agenda.instructor.hometown
    }
      topics: ${agenda.topics.join(", ")}
    `);
  },
  ...location
};
const agendaJSON = JSON.stringify(
  agenda,
  null,
  2
);
const backToObject = JSON.parse(agendaJSON);
console.log(backToObject);
