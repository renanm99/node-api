const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB

mongoose.connect("mongodb+srv://nodeapi:lota78199Z@cluster0aula-93nfw.mongodb.net/nodeapi?retryWrites=true&w=majority",{useNewUrlParser: true});

requireDir("./src/models");

const Product = mongoose.model("Product");

// Primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001, (err, res) => {
    if (err) {
        console.log("Port no available or being used.");
    }
    console.log("\r\nListening on port: 3001...");
});
