const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();
const passport = require("passport");

// read DB
app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

// read Data from DB
router.get("/", async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

/* Ponemos local dentro de authenticate, porque asi nos lo pide la documentacion. De esta manera ejecutamos a las funciones que estan dentro del archivo passport.js. Mirara de autentificar el usuario desde la base de datos y si lo logra, lo guardara en session */
router.post("/", passport.authenticate("local"), (req, res, next) => {
  if (req.user) {
    console.log(req.user);
    console.log("SI fueeee");

    let redir = { redirect: "/" };
    return res.json(redir);
  } else {
    console.log("NO fueeee");
    let redir = { redirect: "/login" };
    return res.json(redir);
  }
});

module.exports = router;