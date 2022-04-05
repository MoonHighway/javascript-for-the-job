import express from "express";
import { weatherSearch } from "./lib.js";

const app = express();

app.use(express.static("public"));

app.get("/:city/:state", async (req, res) => {
  const { city, state } = req.params;
  const result = await weatherSearch(city, state);
  res.send(result);
});

app.listen(3000, () =>
  console.log(`Weather Bug Running - http://localhost:3000`)
);
