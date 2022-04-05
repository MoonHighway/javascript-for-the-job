import path from "path";

export default {
  entry: "./src/client.js",
  output: {
    path: path.resolve("./public"),
    filename: "main.js",
  },
};
