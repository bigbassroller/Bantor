var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bantor', function () {
	console.log('mongodb connected')
})
module.exports = mongoose