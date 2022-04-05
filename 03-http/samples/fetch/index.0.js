const parseResponseBody = (response) =>
  response.json();
const grabFirstResult = (json) => json.results[0];
const filterQuestionAnswer = ({
  question,
  correct_answer
}) => ({
  question,
  answer: correct_answer
});
const print = ({ question, answer }) => {
  document.body.innerHTML = `
        <h1>${question}</h1>
        <h2>answer: ${answer}</h2>
      `;
};

fetch("https://opentdb.com/api.php?amount=1")
  .then(parseResponseBody)
  .then(grabFirstResult)
  .then(filterQuestionAnswer)
  .then(print);
