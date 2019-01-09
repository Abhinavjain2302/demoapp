var express = require('express');
var router = express.Router();
var Person = [];


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


router.get('/search', function (req, res, next) {
  res.render('search');
});

router.post('/insert', function (req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  if ((name.length <= 0) || (age.length <= 0)) {
    res.send("Please enter a valid Name and Age");
  }
  else if ((name.trim().length === 0) || (age.trim().length === 0)) {
    res.send("Please enter a valid Name and Age");
  } else {
    var obj = {};
    obj.name = name;
    obj.age = age;
    Person.push(obj);
    console.log(obj);
    console.log(Person);
    res.render('display', { Person: Person })
  }
})


router.get('/delete/:id', function (req, res, next) {
  var index = req.params.id;
  console.log(index);
  Person.splice(index, 1);
  console.log(Person);
  res.render('display.ejs', { Person: Person })
})


router.post('/search', function (req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  if ((name.length <= 0) || (age.length <= 0)) {
    res.send("Please enter a valid Name and Age");
  }
  else if ((name.trim().length === 0) || (age.trim().length === 0)) {
    res.send("Please enter a valid Name and Age");
  } else {
    console.log(req.body);
    Person.forEach(function (obj) {
      if ((obj.name == name) && (obj.age == age)) {
        res.render('update', { object: obj });
      }
      else {
        res.send('Please enter your correct details');
      }
    })
  }
});


router.post('/update', function (req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  var object = req.body.obj;
  console.log(object);
  if ((name.length <= 0) || (age.length <= 0)) {
    res.send("Please enter a valid Name and Age");
  }
  else if ((name.trim().length === 0) || (age.trim().length === 0)) {
    res.send("Please enter a valid Name and Age");
  } else {

    Person.forEach(function (obj) {
      if (obj == object) {
        obj.name = name;
        obj.age = age;
        console.log(obj);
      }
    })
    console.log(Person)
    res.render('display.ejs', { Person: Person })
  }
});



module.exports = router;
