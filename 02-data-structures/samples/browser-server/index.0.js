const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.setPrompt(" type text here >>  ");

reader.on("line", (input) => {
  if (input === "quit") {
    process.exit();
  }
  console.log(`   received ${input}`);
  reader.prompt();
});

reader.prompt();
