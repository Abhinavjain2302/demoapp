
var insertName=function(req,res,next,Name){
console.log("hiii");
var name=req.body.name;
console.log(name);
Name.push(name);
console.log(Name);
res.render('displayName.ejs',{Name:Name})

}

var insertAge=function(req,res,next,Age){
var age=req.body.age;
Age.push(age);
console.log(Age);
res.render('displayAge.ejs',{Age:Age})

}




module.exports={
	insertName:insertName,
	insertAge:insertAge
}