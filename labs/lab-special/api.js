const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode(200);
  res.write("Hello fro API");
  res.end();
});

server.listen(80, () => {
  console.log("The api server is running");
});
