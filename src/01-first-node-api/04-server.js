const http = require('http');
const port = process.env.PORT || 1337;
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondText(req, res);
  if (req.url === '/json') return respondJson(req, res);
  if (req.url.match(/^\/echo/)) return respondEcho(req, res);

  respondNotFound(req, res);
});

server.listen(port);
console.log(`Server listening on port ${port}`);

function respondText(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi');
}

function respondJson(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }));
}

function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}

function respondEcho(req, res) {
  const { input = '' } = querystring.parse(
    req.url.split('?').slice(1).join('')
  );
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      normal: input,
      shouty: input.toUpperCase(),
      characterCount: input.length,
      backwards: input.split('').reverse().join(''),
    })
  );
}
