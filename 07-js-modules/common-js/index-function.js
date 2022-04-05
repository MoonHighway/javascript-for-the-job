const fs = require("fs");
const createCounter = require("./lib/counter");

fs.readdir("./", (error, files) => {
  if (error) {
    throw error;
  }

  console.log(`Starting counter with ${files.length} files.`);
  const { inc } = createCounter(files.length);

  inc();
  inc();
  inc();

  console.log(inc());
});
