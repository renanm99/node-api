const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

var port = process.env.PORT || 8080;
var user = process.env['USER_MONGO'];
var pass = process.env['PASS_MONGO'];

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB

mongoose.connect("mongodb+srv://"+user+":"+pass+"@cluster0aula-93nfw.mongodb.net/nodeapi?retryWrites=true&w=majority",{useNewUrlParser: true});

requireDir("./src/models");

bodyParser = require('body-parser');

const Product = mongoose.model("Product");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./src/routes');
// routes(app);

app.use("/", routes);

app.listen(port, (err, res) => {
    if (err) {
        console.log("Port no available or being used.");
    }
    console.log("\r\nListening on port: 3001...");
});
