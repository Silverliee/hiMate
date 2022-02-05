// Appel des services (npm module tu connais )
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userController = require('./Controller/UserController');

//Mongoose initialisation
mongoose.connect('mongodb+srv://mohamed:414498200@silver-cluster.yegdt.mongodb.net/HiMate?retryWrites=true&w=majority')
	.then(() => console.log('Connexion à mon cluster mongodb réussie !'))
	.catch(() => console.log('la connexion au cluster à échouée :('));

//bodyparser access config etc
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, DELETE, OPTIONS"
	);
	next();
});

// gestion des controllers
app.use('/users',userController);

//export
module.exports = app;