const Historias = require('../models/Historias');


// Agrega nuevas historias
exports.nuevaHistoria = async (req,res,next) => {
    const historia = new Historia(req.body);

    try{
        await historia.save();
        res.json({mensaje:'Se agrego la historia correctamente'});
    }catch(error){
        console.log(error);
        next();
    }

}


// Muestra todas los historias

exports.mostrarHistorias = async (req, res, next) => {
    try{
        const historias = await Historias.find({});
        res.json(historias);
    }catch (error){
        console.log(error);
        next();
    }
}

// Muestra una historia por su ID
exports.mostrarHistoria = async (req,res,next) => {
    const historia = await Historias.findById(req.params.idHistoria);

    if(!historia){
        res.json({mensaje : 'Esa historia no existe'});
        next();
    }

    // Mostrar una historia
    res.json(historia);
}

// Actualiza una historia por su ID
exports.actualizarHistoria = async (req,res,next) => {
    try{
        const historia = await Historias.findOneAndUpdate(
            { _id : req.params.idHistoria }, 
            req.body, {
                    new : true
            });
        res.json(historia);
    }catch(error){
        console.log(error);
        next();
    }

}

// Elimina una historia por su ID
exports.eliminarHistoria = async (req,res,next) => {

    try{
        await Historias.findOneAndDelete({_id:req.params.idHistoria});
        res.json({mensaje: 'La historia se ha eliminado'});
    }catch(error){
        console.log(error);
        next();
    }

}