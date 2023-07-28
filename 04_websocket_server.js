var http = require('http');
const WebSocket = require('ws');
const { getProgrammingLanguageInfo } = require('./03_chatbot');

var st = require('node-static');

var fileServer = new st.Server('./static_files');

var httpserver = http.createServer(function(request, response) 
{
    request.on('end', function () {
        fileServer.serve(request, response);
        }).resume();
}).listen(3000, function() {
    console.log((new Date()) + 
      ' Server is listening on port 3000');
});

const wss = new WebSocket.Server({ server: httpserver });

wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Parse incoming message as JSON
    const data = JSON.parse(message);

    if (data.type === 'chat') {
      const response = getProgrammingLanguageInfo(data.message);
      ws.send(JSON.stringify({ type: 'response', message: response }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});