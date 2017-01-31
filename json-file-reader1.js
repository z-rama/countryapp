var fs = require ('fs')

var filereader = function (filename, callback) {

fs.readFile( filename, 'utf-8', function(err, data) {

	if (err) {
		throw err;
	}

	var jsondata = JSON.parse (data) 

	callback(jsondata)

	})

}



module.exports = filereader


//  done

