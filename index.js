// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const session = require('express-session');

// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT;


const app = express();

// Configuration du moteur de templates
app.set("views", "./app/views");
app.set("view engine", "ejs");

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// Cette instruction va permettre de récupérer le contenu
// du corps de notre requête (req.body)
// https://expressjs.com/fr/api.html#req.body
app.use(express.urlencoded({ extended: true }));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

// routage !
app.use(router);

app.use((req, res) => {
  res.status(404).render("404");
});

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
