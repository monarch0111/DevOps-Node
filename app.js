const express = require('express')
const app = express()
const port = 3000

app.get('/now', function(req, res) {
	return res.send({current_time: new Date()})
})

app.listen(port, function() {
	console.log("Example app listening on port " + port + "!")
})
