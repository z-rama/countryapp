


// var country = process.argv[2] 

//make a function with country as parameter
//
var fs = require('fs');

var jsonreador = require ("./json-file-reader.js"); 

var countryName = process.argv[2];   

function countryInfo (country) {
	fs.readFile('./countries.json', 'utf-8', function(err, data){
	
	if(err){
		console.log('wrong!');
		throw err;
	} 
	var listAllCountries = JSON.parse(data);

	 for (var i = 0; i < listAllCountries.length; i++) {
		 if (listAllCountries[i].name === countryName) {
		  var domain = listAllCountries[i].topLevelDomain
		 }
	 }
	 console.log('Country: ' + country + '\n The Top Level Domain is: ' + domain)
	 
	})
}

jsonreador("./countries.json", randomName);



