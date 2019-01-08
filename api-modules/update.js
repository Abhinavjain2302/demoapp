
var updateName=function(req,res,next,Name,i){
  var name=req.body.name;
  Name[i]=name;
  console.log(Name);
  res.render('displayName.ejs',{Name:Name})

}

var updateAge=function(req,res,next,Age,i){
	var age=req.body.age;
    Age[i]=age;
    console.log(Age);
    res.render('displayAge.ejs',{Age:Age})
}




module.exports={
	updateName:updateName,
	updateAge:updateAge
}