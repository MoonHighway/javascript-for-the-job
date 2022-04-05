const agenda = createAgenda({
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  }
});

console.log(agenda);

const data = JSON.stringify(agenda);

console.log(data);

const backToAgenda = createAgenda(JSON.stringify(agenda));

backToAgenda.print();

function createAgenda(agenda) {
  return {
    ...agenda,
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
}
