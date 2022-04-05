function submit() {
  let userName = document.getElementById("name").value;
  let userAge = document.getElementById("age").value;
  let p = document.createElement("p");

  let ageCheckString =
    userAge > 25
      ? `${userAge - 25} years older than`
      : userAge < 25
      ? `${25 - userAge} years younger than`
      : `the same age as`;

  p.innerText = `${userName} is ${ageCheckString} JavaScript!`;

  fetch("/", {
    method: "POST",
    body: p.innerText,
  })
    .then(() => console.log("data sent to server"))
    .catch(() => console.error("Something went wrong"));

  document.getElementById("output").appendChild(p);
}
