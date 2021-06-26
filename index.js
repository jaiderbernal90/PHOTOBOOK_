const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/photobook',{
    useNewUrlParser: true
});

// Crear el servidor
const app = express();

// habilitar el bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rutas de la app
app.use('/', routes());


//Puerto
app.listen(3000);




