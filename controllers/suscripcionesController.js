const Suscripciones = require('../models/Suscripciones');


// Agrega nuevas suscripciones
exports.nuevaSuscripcion = async (req,res,next) => {
    const suscripcion = new Suscripciones(req.body);

    try{
        await suscripcion.save();
        res.json({mensaje:'Se agrego la suscripcion correctamente'});
    }catch(error){
        console.log(error);
        next();
    }

}


// Muestra todas los suscripciones

exports.mostrarSuscripciones = async (req, res, next) => {
    try{
        const suscripciones = await Suscripciones.find({});
        res.json(suscripciones);
    }catch (error){
        console.log(error);
        next();
    }
}

// Muestra una suscripcion por su ID
exports.mostrarSuscripcion = async (req,res,next) => {
    const suscripcion = await Suscripciones.findById(req.params.idSuscripcion);

    if(!suscripcion){
        res.json({mensaje : 'Esa suscripcion no existe'});
        next();
    }

    // Mostrar una suscripcion
    res.json(suscripcion);
}

// Actualiza una suscripcion por su ID
exports.actualizarSuscripcion = async (req,res,next) => {
    try{
        const suscripcion = await Suscripciones.findAndModify(
            { _id : req.params.idSuscripcion }, 
            req.body, {
                    new : true
            });
        res.json(suscripcion);
    }catch(error){
        console.log(error);
        next();
    }

}

// Elimina una suscripcion por su ID
exports.eliminarSuscripcion = async (req,res,next) => {

    try{
        await Suscripciones.findOneAndDelete({_id:req.params.idSuscripcion});
        res.json({mensaje: 'La suscripcion se ha eliminado'});
    }catch(error){
        console.log(error);
        next();
    }

}