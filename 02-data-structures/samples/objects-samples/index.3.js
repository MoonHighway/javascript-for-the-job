const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  print: () => {
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

agenda.print();
