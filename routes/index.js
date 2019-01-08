var express = require('express');
var router = express.Router();
var Name=[];
var Age=[];
var i;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/name', function(req, res, next) {
  res.render('name');
});

router.get('/age', function(req, res, next) {
  res.render('age');
});

router.post('/insertName',function(req,res,next){
var Insert=require('../api-modules/insert.js');
Insert.insertName(req,res,next,Name)
})


router.post('/insertAge',function(req,res,next){
var Insert=require('../api-modules/insert.js');
Insert.insertAge(req,res,next,Name)
})

router.post('/deleteName',function(req,res,next){
	var Delete=require('../api-modules/delete.js');
Delete.deleteName(req,res,next,Name)
})

router.post('/deleteAge',function(req,res,next){
	var Delete=require('../api-modules/delete.js');
  Delete.deleteName(req,res,next,Age)
})

router.get('/updateName', function(req, res, next) {
   i=req.query.index;
  console.log(i);
  res.render('updateName');

});

router.get('/updateAge', function(req, res, next) {
   i=req.query.index;
  console.log(i);
  res.render('updateAge');
});

router.post('/updateName', function(req, res, next) {
  var Update=require('../api-modules/update.js');
   Update.updateName(req,res,next,Name,i)
});

router.post('/updateAge', function(req, res, next) {
 var Update=require('../api-modules/update.js');
   Update.updateAge(req,res,next,Age,i)
});



module.exports = router;
