var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mimusica', { titulo: 'Estas son tus listas musicales guardadas' });
});



module.exports = router;