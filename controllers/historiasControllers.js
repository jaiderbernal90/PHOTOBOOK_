const Historias = require('../models/Historias');
global.multer = require('multer');
const path = require('path');
const { response } = require('express');


// Agrega nuevas historias
exports.nuevaHistoria = async (req,res,next) => {
    console.log(req.body);
    const historia = new Historias(req.body);

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
        const historias = await Historias.find({}).sort({_id:-1});
        res.json(historias);
    }catch (error){
        console.log(error);
        next();
    }
}

// Muestra todas los historias
exports.mostrarHistoriasInicio = async (req, res, next) => {
    try{
        const historias = await Historias.find({}).sort({_id:-1}).limit(parseInt(req.params.limit));
        res.json(historias);
    }catch (error){
        console.log(error);
        next();
    }
}


// Muestra todas los historias
exports.mostrarUnaHistoria = async (req, res, next) => {
    try{
        const historias = await Historias.find({}).sort({_id:-1}).limit(1);
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
        res.json({mensaje: 'Historia actualizada correctamente'});
    }catch(error){
        console.log(error);
        res.json({error: 'Hubo un error'});
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

// subirImagen una historia
exports.subirImagen = async (req,res,next) => {
    console.log(req.params.nombreImagen);
    const post = {
        nombre: req.params.nombreImagen 
    }

    var upload = multer({
        storage: multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, './assets/img')
            },
            filename: (req,file,callback) => {
                callback(null, post.nombre + path.extname(file.originalname))
            }
        }),
        fileFilter: (req, file, callback) => {
            var ext = path.extname(file.originalname);

            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif' && ext !== '.tif'){
                console.log('formato no valido');
                response.json({ mensaje : 'Formato no valido' })
            }else{
                callback(null,true)
            }
        }
    }).single('userFile');
    
    
    upload(req, res, (err) => {
        if(err){
            res.json({state:false,mensaje: 'Error al cargar el archivo'});
        }else{
            console.log('Archivo Subido');
            res.json({ state:true, mensaje:'Archivo Cargado'});
        }
    })
    
    // console.log(upload);

}