// const amount = 12

// if (amount < 10) {
//     console.log('small no');
// }
// else{
//     console.log('large no')
// }

// console.log(`hey it's my first node app!!!`)

// `` is know as template string

// -------Global  - No Window--------- !!!

// __dirname - path to current directory 
// __filename - filename
// require - function to use modules(CommonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// setInterval(() => {
//    console.log('Skr') 
// }, 1000);



// ------ basic npm command to get started with ------

// npm -global command, comes with node
// npm --version 

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName> 

// package.json - mainfest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _= require('lodash');

const items = [1, 2, [3, [4]]]
const newItems = _.flattenDeep(items);

console.log(newItems);
