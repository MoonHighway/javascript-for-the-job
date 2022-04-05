let count = 0;

export const inc = () => ++count;
export const dec = () => --count;

export default function (initCount = 0) {
  count = initCount;
}
