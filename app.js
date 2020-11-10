const prompt = require('prompt-sync')();
console.log("1. Read package.json");
console.log("2. Display OS info");
console.log("3. Start HTTP server");
const num = prompt('Enter a number: ');

    switch (Number(num)) {
        case 1:
            readFile();
            break;
        case 2:
            osInfo();
            break;
        case 3:
            startServer();
            break;
        default:
            console.log("Invalid option.");
            break;
    }

function readFile() {
    const fs = require('fs');
    fs.readFile('package.json', 'utf-8', (err, content) => {
        console.log(content);
    });

    let rawdata = fs.readFileSync('package.json');
    let student = JSON.parse(rawdata);
    console.log(student);
}

function osInfo() {
    const os = require('os');
    console.log('SYSTEM MEMORY:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + 'GB');
    console.log('FREE MEMORY:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + 'GB');
    console.log('CPU CORES:', os.cpus().length);
    console.log('ARCH:', os.arch());
    console.log('PLATFORM:', os.platform());
    console.log('RELEASE:', (os.release()));
    console.log('USER:', os.userInfo().username);
}

function startServer() {
    const http = require("http");

    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello Sean\n');
    }).listen(3000);
    console.log('Server running at http://127.0.0.1:3000/');
}