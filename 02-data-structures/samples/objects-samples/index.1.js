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

agenda.print();
