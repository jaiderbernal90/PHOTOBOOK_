const Usuarios = require('../models/Usuarios');

// Agrega un nuevo usuario
exports.nuevoUsuario = async (req, res, next) =>{
    const usuario = new Usuarios(req.body);

    try{
        // Almacenar el registro
        await usuario.save();

        res.json({ mensaje: 'Se Agrego un nuevo usuario'});

    }catch(error){
        // Si hay error, log y next
        console.log(error);
        next();
    }
}

// Mustra todos los usuarios

exports.mostrarUsuarios = async (req, res, next) => {
    try{
        const usuarios = await Usuarios.find({}).sort({_id:-1});
        res.json(usuarios);
    }catch (error){
        console.log(error);
        next();
    }
}

exports.validarLogin = async (req, res, next) => {
    const usuario = await Usuarios.find({email: req.body.email},{"email":1, "password":1});
    
    if(!usuario || usuario.length < 1){
        console.log('LLEGUE');
        res.json({mensaje : 'Ese usuario no existe'});
        next();
    }

    console.log(usuario);

    // Mostrar el usuario
    res.json(usuario);
}


// Muestra un usuario por su ID
exports.mostrarUsuario = async (req,res,next) => {
    const usuario = await Usuarios.findById(req.params.idUsuario);

    if(!usuario){
        res.json({mensaje : 'Ese usuario no existe'});
        next();
    }

    // Mostrar el usuario
    res.json(usuario);
}

// Actualiza un usuario por su ID
exports.actualizarUsuario = async (req,res,next) => {
    try{
        const usuario = await Usuarios.findOneAndUpdate(
            { _id : req.params.idUsuario }, 
            req.body, {
                    new : true
            });
        res.json({mensaje: 'Usuario actualizado',res: usuario});
    }catch(error){
        console.log(error);
        next();
    }

}

// Elimina un usuario por su ID
exports.eliminarUsuario = async (req,res,next) => {

    try{
        await Usuarios.findOneAndDelete({_id:req.params.idUsuario});
        res.json({mensaje: 'El usuario se ha eliminado'});
    }catch(error){
        console.log(error);
        next();
    }

}