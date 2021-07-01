const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');

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

// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la app
app.use('/', routes());


//Puerto
app.listen(3000);




