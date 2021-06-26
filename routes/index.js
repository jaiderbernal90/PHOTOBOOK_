const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const historiasController = require('../controllers/historiasControllers');
const suscripcionesController = require('../controllers/suscripcionesController');


module.exports = function(){  

    // Agrega nuevos usuarios via POST
    router.post('/usuarios', usuarioController.nuevoUsuario );
    // Obtener todos los usuarios
    router.get('/usuarios', usuarioController.mostrarUsuarios );
    // Muestra un usuario por ID
    router.get('/usuarios/:idUsuario', usuarioController.mostrarUsuario);
    // Actualizar usuario por ID
    router.put('/usuarios/:idUsuario', usuarioController.actualizarUsuario );
    // Eliminar usuario por ID
    router.delete('/usuarios/:idUsuario', usuarioController.eliminarUsuario );


    // HISTORIAS

    // Agrega nuevas historias via POST
    router.post('/historias', historiasController.nuevaHistoria );
    // Obtener todas las historias
    router.get('/historias', historiasController.mostrarHistorias );
    // Muestra una historia por ID
    router.get('/historias/:idHistoria', historiasController.mostrarHistoria);
    // Actualizar historia por ID
    router.put('/historias/:idHistoria', historiasController.actualizarHistoria );
    // Eliminar historia por ID
    router.delete('/historias/:idHistoria', historiasController.eliminarHistoria );

    
    // SUSCRIPTIONS

    // Agrega nueva suscripcion via POST
    router.post('/suscripciones', suscripcionesController.nuevaSuscripcion );
    // Obtener todas las suscripciones
    router.get('/suscripciones', suscripcionesController.mostrarSuscripciones );
    // Muestra una suscripcion por ID
    router.get('/suscripciones/:idSuscripcion', suscripcionesController.mostrarSuscripcion);
    // Actualizar suscripcion por ID
    router.put('/suscripciones/:idSuscripcion', suscripcionesController.actualizarSuscripcion );
    // Eliminar suscripcion por ID
    router.delete('/suscripciones/:idSuscripcion', suscripcionesController.eliminarSuscripcion );

    return router;
}