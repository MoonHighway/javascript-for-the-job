const today = new Date();
const jsBirthday = new Date("9/1/1995");

const question =
  document.getElementById("question");

const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const button = document.querySelector(
  "main>button"
);

const jsAge =
  today.getFullYear() - jsBirthday.getFullYear();

button.onclick = function () {
  const results =
    inputAge.value > jsAge
      ? `${inputName.value} is ${
          inputAge.value - jsAge
        } years older than JS`
      : inputAge.value < jsAge
      ? `${inputName.value} is ${
          jsAge - inputAge.value
        } years younger than JS`
      : `${inputName.value} is the same age as JS`;
  const p = document.createElement("p");
  const output =
    document.getElementById("output");
  p.innerText = results;
  output.appendChild(p);

  inputName.value = "";
  inputAge.value = "";
};
