const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    lastName:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    },
    role:{
        type: Number,
        trim: true
    },
    nickname:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Usuarios', usuariosSchema);