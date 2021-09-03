const helpers = {};

helpers.verifyAuthentication = (req, res, next) =>{
	// este metodo proviene de passport. is Authenticated(), retorna un true o false segun si esta o no logeado
	if(req.isAuthenticated()){
		return next();
	}else {
		console.log("No puede estar ahí!");
		res.json("Holis");
		// res.redirect("/signin");
	};
};

module.exports = helpers;