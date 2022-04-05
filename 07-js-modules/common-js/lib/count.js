let count = 0;

function inc() {
  return ++count;
}

function dec() {
  return --count;
}

module.exports = {
  inc,
  dec,
};
