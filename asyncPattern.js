// started operating system process 
// console.log('first')
// setTimeout(() => {
//     //console.log('second')
// }, 0);
// console.log('third') --> completed and exited os process

// setInterval(() => {
//     console.log('hi')
// }, 2000);
// console.log(`I will go first`);

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.end('Home Page')   
    }
    if(req.url === '/about'){
    // Blocking code !!!
    for(let i = 0; i < 1000; i++) {
        for(let j = 0; j < 1000; j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('About Page')
    }
    res.end('error page')
})

server.listen(5000, () => {
    console.log(`server is listening on port: 5000....`)
})