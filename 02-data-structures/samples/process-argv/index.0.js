console.log(typeof process.argv);
console.log(process.argv instanceof Array);
console.log(Array.isArray(process.argv));
console.log(
  `process.argv has ${process.argv.length} items: `
);
console.log(process.argv);
