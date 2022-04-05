const users = require("./birthdays.json");

const jsBirthday = new Date("9/1/1995");
const today = new Date();

const yearsOld =
  today.getFullYear() - jsBirthday.getFullYear();

console.log(
  `JavaScript is ${yearsOld} years old!`
);

for (let i = 0; i < users.length; i++) {
  let userBirthday = new Date(users[i].birthday);
  let yearsSinceJS =
    jsBirthday.getFullYear() -
    userBirthday.getFullYear();
  let ageCheckString =
    yearsSinceJS > 0
      ? `${yearsSinceJS} years older than`
      : yearsSinceJS < 0
      ? `${Math.abs(
          yearsSinceJS
        )} years younger than`
      : `the same age as`;
  console.log(
    `${users[i].name} is ${ageCheckString} JavaScript`
  );
}
``;
