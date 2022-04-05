let count = 0;

const inc = () => count++;
const dec = () => count--;

module.exports = function (initCount = 0) {
  count = initCount;

  return {
    inc,
    dec,
  };
};
