const express = require('express');

const server = express();

server.use(express.json());

///endpoints go here

const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});