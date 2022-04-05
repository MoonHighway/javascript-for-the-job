function submit() {
  let userName =
    document.getElementById("name").value;
  let userAge =
    document.getElementById("age").value;
  let p = document.createElement("p");

  let ageCheckString =
    userAge > 25
      ? `${userAge - 25} years older than`
      : userAge < 25
      ? `${25 - userAge} years younger than`
      : `the same age as`;

  p.innerText = `${userName} is ${ageCheckString} JavaScript!`;

  document
    .getElementById("output")
    .appendChild(p);
}
