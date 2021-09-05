const helpers = {};

helpers.verifyAuthentication = (req, res, next) => {
  // este metodo proviene de passport. is Authenticated(), retorna un true o false segun si esta o no logeado
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
};

module.exports = helpers;
