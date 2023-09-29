// require your server and launch it here
const server = require("./api/server.js");

server.listen(9000,()=> {
    console.log("server listening on http://localhost:9000"); 
})