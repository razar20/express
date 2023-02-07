// ------Built in Modules------ 
// - OS
// - PATH
// - FS
// - HTTP


// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./index.js');
const sayHi = require('./app1.js');
const data = require('./index1.js');
require('./1-index.js')
//console.log(data);

sayHi('pk');
sayHi(names.skr);
sayHi(names.ssr);