const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
  password: "azerty", // le mot de passe
  database: "db" // le nom de la base de données
});
module.exports = connection;
