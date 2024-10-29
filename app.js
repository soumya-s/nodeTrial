const logger = require('./log');
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj.name);
console.log(pathObj.dir);
