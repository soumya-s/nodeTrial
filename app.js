const logger = require('./log');
const path = require('path');
const os = require('os');

var pathObj = path.parse(__filename);
var totalMemory = os.totalmem;
var freeMemory = os.freemem;

console.log(pathObj.name);
console.log(pathObj.dir);
console.log("total Memory"+totalMemory);
console.log("Free Memory"+freeMemory);
