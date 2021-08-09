const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historiasSchema = new Schema({
    title:{
        type: String,
        trim: true
    },
    prefijoTitle:{
        type: String,
        lowercase: true,
        trim: true
    },
    description_large:{
        type: String,
        trim: true
    },
    description_short:{
        type: String,
        trim: true
    },
    autor:{
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    date_creation:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Historias', historiasSchema);