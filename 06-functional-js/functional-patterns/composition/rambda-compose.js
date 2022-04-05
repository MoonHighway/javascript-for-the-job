const { compose } = require("rambda");

const createClockTime = (date) => new Date();

const appendAMPM = (date) => ({
  date,
  ampm: date.getHours() >= 12 ? "PM" : "AM",
});

const civilianHours = (clockTime) => {
  const hours = clockTime.date.getHours();
  return {
    ampm: clockTime.ampm,
    hours: hours > 12 ? hours - 12 : hours,
  };
};

const toString = ({ hours, ampm }) => `${hours} ${ampm}`;

const displayHours = compose(
  toString,
  civilianHours,
  appendAMPM,
  createClockTime
);

console.log(displayHours());
