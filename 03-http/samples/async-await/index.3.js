async function retrieveQuestion() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1"
    );
    const json = await response.json();
    const { question, correct_answer } = json.results[0];
    return {
      question,
      answer: correct_answer
    };
  } catch (error) {
    console.error(error);
  }
}

function getQuestion() {
  return fetch("https://opentdb.com/api.php?amount=1")
    .then(response => response.json())
    .then(json => json.results[0])
    .then(({ question, correct_answer }) => ({
      question,
      answer: correct_answer
    }))
    .catch(console.error);
}
