const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});



// create a readme.md file to docs /users/register endpoint with description and status code ,also write the how the data is requires in the endpoint  create md file in the backend folder 