if (process.argv.includes("--name")) {
  let index = process.argv.indexOf("--name");
  let name = process.argv[index + 1];
  console.log(`The name ${name} was received`);
}

function argval(flag) {
  let valueIndex =
    process.argv.indexOf(`--${flag}`) + 1;
  return process.argv[valueIndex];
}

console.log(argval("name"));
console.log(argval("age"));
