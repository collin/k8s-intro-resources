const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode(200);
  res.write("Hello from GraphQL Server");
  res.end();
});

server.listen(80, () => {
  console.log("The Graphql server is running");
});
