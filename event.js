//event extends
//you need to use class instead of object 
//when you use events Emitter


const EventEmitter = require('events');


class Logger extends EventEmitter{

 log(message) {


      console.log(`****${message}****`);
	//raise  an event 

	this.emit('messagelogged' , {id:1, url:"https//ops.com"});
}	

}

module.exports = Logger;
