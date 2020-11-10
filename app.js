const prompt = require('prompt-sync')()
console.log('1. Read package.json file' + '\n' +
            '2. Display OS info' + '\n' +
            '3. Start HTTP server' + '\n')
const input = prompt('Enter a number: ')

menySelect(input)

function menySelect(input){

    switch (Number(input)){

        case 1:
            readFile()
            break;
        case 2:
            osInfo()
            break;
        case 3:
            startServer()
            break;
        default:
            console.log('Invalid option.')
            process.exit(1)
            break;

    }
}

function readFile() {
    const fs = require('fs')
    fs.readFile('package.json', 'utf-8', (err, content) => {
        console.log('Reading package.json'+'\n' + content)
    })
}

function osInfo(){
    const os = require('os')
    console.log('Getting OS info...' + '\n'+
                'SYSTEM MEMORY:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + 'GB' + '\n' +
                'FREE MEMORY:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + 'GB' + '\n' +
                'CPU CORES:', os.cpus().length + '\n' +
                'ARCH:', os.arch() + '\n' +
                'PLATFORM:', os.platform() + '\n' +
                'RELEASE:', (os.release()) + '\n' +
                'USER:', os.userInfo().username)
}

function startServer(){
    const http = require("http")
    console.log('Starting HTTP server...'+'\n')
    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Hello World\n')
    }).listen(3000)
    console.log('Listening on port 3000...')
}