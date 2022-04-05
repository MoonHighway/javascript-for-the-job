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

const compose = (...fns) => (arg) =>
  fns.reduce((composed, f) => f(composed), arg);

// Using a compose function

const displayHours = compose(
  createClockTime,
  appendAMPM,
  civilianHours,
  toString
);

console.log(displayHours());
