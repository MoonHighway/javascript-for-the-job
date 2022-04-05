const { readFile } = require("fs").promises;
const http = require("http");

const server = http.createServer(
  async (req, res) => {
    if (req.method === "POST") {
      req.on("data", (chunk) =>
        console.log(chunk.toString())
      );
    }
    if (req.url.includes("css")) {
      const css = await readFile(
        `./public/${req.url}`,
        "UTF-8"
      );
      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      res.end(css);
    }
    if (req.url.includes("js")) {
      const js = await readFile(
        `./public/${req.url}`,
        "UTF-8"
      );
      res.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      res.end(js);
    }
    if (req.url.includes("png")) {
      const png = await readFile(
        `./public/${req.url}`
      );
      res.writeHead(200, {
        "Content-Type": "image/png"
      });
      res.end(png);
    }
    const homePage = await readFile(
      "./public/index.html",
      "UTF-8"
    );
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(homePage);
  }
);

server.listen(3000, () =>
  console.log("http://localhost:3000")
);
