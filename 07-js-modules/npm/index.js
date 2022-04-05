const express = require("express");
const app = express();
const [, , ...message] = process.argv;

app.get("/", function (req, res) {
  res.send(message.join(" "));
});

app.listen(3000);
