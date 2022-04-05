const q = endlessQuestions();

document.body.onkeypress = function () {
  q.next().then(({ value }) => {
    document.body.innerHTML = `<h1>${value}</h1>`;
  });
};

async function* endlessQuestions() {
  while (true) {
    const {
      results: [{ question, correct_answer }]
    } = await fetch(
      "https://opentdb.com/api.php?amount=1"
    ).then((res) => res.json());

    yield question;
    yield correct_answer;
  }
}
