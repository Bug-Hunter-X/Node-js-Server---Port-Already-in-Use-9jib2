const http = require('http');

const port = 8080;

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

function tryListen() {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Retrying in 1 second...`);
      setTimeout(tryListen, 1000);
    } else {
      console.error(`Failed to start server:`, err);
    }
  });
}

tryListen();