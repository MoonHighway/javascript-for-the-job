const http = require("http");
const fs = require("fs");
const readline = require("readline");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

let mood = "happy";

const server = http.createServer(async (req, res) => {
  if (req.url.match(/.jpg/)) {
    const img = await readFile(`./public/${req.url}`);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    return res.end(img);
  }

  const html = await readFile(`./public/${mood}.html`, "UTF-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.setPrompt("\n\n happy | sad | quit \n> ");

reader.on("line", (newMood) => {
  if (!newMood.match(/happy|sad|quit/)) {
    console.log("command not found");
    reader.prompt();
    return;
  }

  if (newMood === "quit") {
    process.exit();
  }

  if (mood !== newMood) {
    mood = newMood;
    console.log(`mood changed to ${mood}`);
  }
  reader.prompt();
});

server.listen(3000);
console.log("Mood Server listening on port 3000");

reader.prompt();
