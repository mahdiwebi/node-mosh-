

function memoryState () {

	const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


console.log('Total Memory: ' + totalMemory);

console.log('Free Memory: ' + freeMemory);


}

module.exports.memoryState = memoryState;


