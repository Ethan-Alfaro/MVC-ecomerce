const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
dotenv.config();
const app = express();

// Llamamos a la base de datos para inicializarla
require("./database");
require("./passport");

// congif
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "/../views"));
app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

// middlewares
// morgan nos da informacion en la consola del terminal de los tipos de request que hacemos. tipo POST, GET, PUT, DELETE
app.use(morgan("dev"));
// Esto es un middleware que comprueba si el mensage que recive desde el cliente (en formularios), es en formato Json.
app.use(express.json());
/* urlencoded sirve para que exprees entienda los req de los formularios html */
app.use(express.urlencoded({ extended: false }));
/* Importante inizializar las sesiones antes que passport session, si no da errores */
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
      sameSite: false, // this may need to be false is you are accessing from another React app
      httpOnly: false, // this must be false if you want to access the cookie
    },
  })
);
/* Passport nos hara comprobaciones y autenticaciones de usuario */
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  res.locals.userSession = req.user || null;
  next();
});

// routes
app.use("/", require("./../routes/home-router"));
app.use("/products", require("./../routes/product-router"));
app.use("/profile", require("./../routes/profile-router"));
app.use("/login", require("./../routes/login-router"));
app.use("/register", require("./../routes/register-router"));
app.use("/dashboard", require("./../routes/dashboard-router"));
app.use("/cart", require("./../routes/cart-router"));

// satic files
app.use(express.static(path.join(__dirname, "/../../public")));

// starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
