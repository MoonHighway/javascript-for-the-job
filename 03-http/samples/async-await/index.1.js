async function retrieveQuestion() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=1"
  );
  const json = await response.json();
  const { question, correct_answer } = json.results[0];
  return {
    question,
    answer: correct_answer
  };
}

function printQuestion({ question, answer }) {
  document.body.innerHTML = `
        <h1>${question}</h1>
        <h2>answer: ${answer}</h2>
      `;
}

retrieveQuestion().then(printQuestion);
