const oneBigFunction = () =>
  toString(civilianHours(appendAMPM(createClockTime())));

console.log(oneBigFunction());

function createClockTime(date) {
  return new Date();
}

function appendAMPM(date) {
  return {
    date,
    ampm: date.getHours() >= 12 ? "PM" : "AM",
  };
}

function civilianHours(clockTime) {
  const hours = clockTime.date.getHours();
  return {
    ampm: clockTime.ampm,
    hours: hours > 12 ? hours - 12 : hours,
  };
}

function toString({ hours, ampm }) {
  return `${hours} ${ampm}`;
}
