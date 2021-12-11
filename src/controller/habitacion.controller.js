const { Collection } = require("mongodb");

const habitacionCtrl = {};
const Habitacion = require('../model/habitacion.model')

habitacionCtrl.getHabitaciones = async (req, res) => {
    try {
        const habitaciones = await Habitacion.find({});
        res.json(habitaciones);
    } catch (error) {
        console.log(error);
    }    
};

habitacionCtrl.getHabitacion = async (req, res) => {
    try {
        const habitaciones = await Habitacion.find({num_hab:req.params._num_hab});
        res.json(habitaciones);
    } catch (error) {
        console.log(error);
    }    
};

habitacionCtrl.createHabitacion = async (req, res) => {
    try {
        const habitacionTemp = {
            // idproduct: req.body.idproduct,
            
            num_hab: req.body.num_hab,
            tipo_hab: req.body.tipo_hab,
            precio: req.body.precio,
            disponible: req.body.disponible,
            
        };
        
        let _habitacion = new Habitacion(habitacionTemp);
        await _habitacion.save();
        res.send("creada")

    }catch (error) {
        console.log(error);
    }    
};

habitacionCtrl.editHabitacion = async (req, res) => {
    try {
        const habitacionTemp = {
            num_hab: req.body.num_hab,
            tipo_hab: req.body.tipo_hab,
            precio: req.body.precio,
            disponible: req.body.disponible,
            
        };

        await Habitacion.updateOne({num_hab:req.params._num_hab},habitacionTemp);
        res.send("Actualizada");

    }catch (error) {
        console.log(error);
    }    
};

habitacionCtrl.deleteHabitacion = async (req, res) => {
    try {
        await Habitacion.deleteOne({ num_hab: req.params._num_hab });
        res.send("Eliminada Correctamente");

    }catch (error) {
        console.log(error);
    }    
};



module.exports = habitacionCtrl;

