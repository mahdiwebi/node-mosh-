const fs = require('fs');



function filedirectory() {


//synch read dir function
let files = fs.readdirSync('./');

console.log(files);



//asynch read dir function

fs.readdir( './' , function(er , files){

if(er) {
console.log('error could not find files');
} else {
console.log('result Asyn' , files);

} 

})

};




module.exports.filedirectory = filedirectory;