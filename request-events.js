// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilizes it

customEmitter.on('response', (name, id )=> {
    console.log(`data received  ${name} with id:${id}`)
})

customEmitter.on('response', ()=> {
    console.log(`some other logic`)
})


customEmitter.emit('response', 'Skr', 25)

//------Using of Events with http----------

const http = require('http')

// using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('HI');
})

server.listen(5000)