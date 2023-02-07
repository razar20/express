// -------STREAMS--------
/* 
 Streams are used to read or write sequentially
 4 types of streams
 -> writeable
 -> readable
 -> duplex
 -> transform
 */

// const { writeFileSync } = require('fs');
// for(let i = 0; i < 1000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a'})
// }

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, 
    encoding: 'utf-8',
})

// default size of the buffer is 64kb
// last buffer - remainder 
// highWaterMark - control size
// const stream = createReadStream

// stream.on('data', (result) => {
//     console.log(result);
// })
// stream.on('error', (err) => 
//     console.log(err)
// )

var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt')
    fileStream.on('open', ()=> {
    fileStream.pipe(res)//--> pushing fs.ReadStream to fs.WriteStream
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(5000)