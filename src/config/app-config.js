const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// Llamamos a la base de datos para inicializarla
require("./database");

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

// routes
app.use("/", require("./../routes/home-router"));
app.use("/products", require("./../routes/product-router"));
app.use("/profile", require("./../routes/profile-router"));
app.use("/dashboard", require("./../routes/dashboard-router"));
app.use("/cart", require("./../routes/cart-router"));

// satic files
app.use(express.static(path.join(__dirname, "/../../public")));

// starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
