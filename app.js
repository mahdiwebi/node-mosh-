
//general node js syntax

//call a module 
const birthCal = require('./birth');

birthCal.Age(1998);




//eveny extends
//raise: logging (data:message)

const Logger = require('./event.js');
const logger = new Logger();

//resigter a listener order is important
//lisnner
logger.on('messagelogged', function(arg) {
	console.log('listner called' , arg);
});


//access a method in the class
logger.log('message 1');



//file system  synch  / Asyn
const filedirectory = require('./fileSystem.js');

filedirectory.filedirectory();


//os module 

const memoryState = require('./os');

memoryState.memoryState();









