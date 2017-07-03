var express = require ('express');
var path = require ('path');
var router = express.Router();

router.get('/', function(req,res){
  console.log('register url hit');
  res.sendFile(path.resolve('public/views/register.html'));
});

module.exports = router;
