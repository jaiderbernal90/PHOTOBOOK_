const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuscripcionesSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    },
    date_creation:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Suscriptions', SuscripcionesSchema);