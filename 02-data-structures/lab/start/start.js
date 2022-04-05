const users = require("./ages.json");

for (let i = 0; i < users.length; i++) {
  let ageCheckString =
    users[i].age > 25
      ? `${users[i].age - 25} years older than`
      : users[i].age < 25
      ? `${25 - users[i].age} years younger than`
      : `the same age as`;
  console.log(
    `${users[i].name} is ${ageCheckString} JavaScript`
  );
}
