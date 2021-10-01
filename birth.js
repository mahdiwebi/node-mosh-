
//url will be private in the module
var url = 'https://translate.google.com/';


function Age(birthdate) {
	
	let age = 2021 - birthdate;
    
    
	console.log(age);
}


//export only the funtion to reuse it 
module.exports.Age = Age;