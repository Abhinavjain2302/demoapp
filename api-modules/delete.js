var deleteName = function (req, res, next, Name) {
	var index = req.body.index;
	Name.splice(index, 1);
	console.log(Name);
	res.render('displayName.ejs', { Name: Name })

}

var deleteAge = function (req, res, next, Age) {
	var index = req.body.index;
	Age.splice(index, 1);
	console.log(Age);
	res.render('displayAge.ejs', { Age: Age })
}

module.exports = {
	deleteName: deleteName,
	deleteAge: deleteAge
}