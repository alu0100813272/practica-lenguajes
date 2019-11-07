var express = require('express');
var router = express.Router();
var index = __dirname + '/../ejemplo/index.html'
/* GET home page. */
router.get('/', function(req, res) {
	//res.render("index");
    res.sendfile('index.html');
});

router.get('/datos', function(req, res) {
	//res.render("index");
    res.sendfile('datos.json');
});

module.exports = router;
