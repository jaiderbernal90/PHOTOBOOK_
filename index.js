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

app.all('*',(req, res, next) => {

    var whitelist = req.headers.origin;

    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");
    //res.header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');

    next();

});

// habilitar el bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/imagenes', express.static(path.join(__dirname, 'assets/img')));


// Rutas de la app
app.use('/', routes());


//Puerto
app.listen(3000);




