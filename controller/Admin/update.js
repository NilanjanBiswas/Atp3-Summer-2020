var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('update');
})

router.post('/',function(req,res){
  res.send('Updated')
})

module.exports = router;
