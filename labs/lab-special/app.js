const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode(200);
  res.write("Hello from Front-end APP");
  res.end();
});

server.listen(80, () => {
  console.log("The APP server is running");
});
