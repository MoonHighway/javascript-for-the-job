//
// Part One
//
fetch("https://opentdb.com/api.php?amount=1")
  .then(response => response.json())
  .then(json => json.results[0])
  .then(({ question, correct_answer }) => ({
    question,
    answer: correct_answer
  }))
  .then(console.table)
  .catch(console.error);

//
// Part Two
//

// fetch("https://opentdb.com/api.php?amount=1")
//   .then(response => response.json())
//   .then(json => json.results[0])
//   .then(({ question, correct_answer }) => ({
//     question,
//     answer: correct_answer
//   }))
//   .then(({ question, answer }) => {
//     document.body.innerHTML = `
//       <h1>${question}</h1>
//       <h2>answer: ${answer}</h2>
//     `;
//   })
//   .catch(console.error);

//
// Part Three
//

// const parseResponseBody = response => response.json();

// const grabFirstResult = ([result]) => result;

// const filterQuestionAnswer = ({
//   question,
//   correct_answer: answer
// }) => ({
//   question,
//   answer
// });

// const print = ({ question, answer }) => {
//   document.body.innerHTML = `
//         <h1>${question}</h1>
//         <h2>answer: ${answer}</h2>
//       `;
// };

// fetch("https://opentdb.com/api.php?amount=1")
//   .then(parseResponseBody)
//   .then(grabFirstResult)
//   .then(filterQuestionAnswer)
//   .then(print)
//   .catch(console.error);
