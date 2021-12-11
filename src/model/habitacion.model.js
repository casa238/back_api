// const { Double } = require('bson');

const mongoose = require('mongoose');
const {Schema} = require('mongoose');

let habitacionSchema = new Schema({
    num_hab: { type: String, required: true},
    tipo_hab: { type: String, required: true },
    precio: { type: Number, required: true },
    disponible: { type: Boolean, required: true },
    
});
 
const Habitacion = mongoose.model('Habitacion', habitacionSchema);

module.exports = Habitacion;