const { Collection } = require("mongodb");



const reservaCtrl = {};
const Reserva = require('../model/reserva.model')



reservaCtrl.getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find({});
        res.json(reservas);
    } catch (error) {
        console.log(error);
    }    
};

reservaCtrl.getReserva = async (req, res) => {
    try {
        const reservas = await Reserva.find({id:req.params.id});
        res.json(reservas);
    } catch (error) {
        console.log(error);
    }    
};


reservaCtrl.createReserva = async (req, res) => {
    try {
        const reservaTemp = {
            // iduser:req.body.iduser,
            fecha_entrada: req.body.fecha_entrada,
            fecha_salida: req.body.fecha_salida,
            habitacion: req.body.habitacion,
            huesped: req.body.huesped,
            nombreReserva: req.body.nombreReserva 
            
           
            
            
        };
        
        
        let _reserva = new Reserva(reservaTemp);
        
        // if(_reserva.fecha_salida!=_reserva.date) {
        //     console.log(_reserva.fecha_salida)
        //     console.log(_reserva.date)
            await _reserva.save();
            res.send("creada")
        // }

       
        
   


    }catch (error) {
        console.log(error);
        
    }    
};

// habitacionCtrl.editHabitacion = async (req, res) => {
//     try {
//         const habitacionTemp = {
//             tipo_hab: req.body.tipo_hab,
//             precio: req.body.precio,
//             total_hab: req.body.total_hab,
            
//         };

//         await Habitacion.updateOne({tipo_hab:req.params.tipo_hab},habitacionTemp);
//         res.send("Actualizada");

//     }catch (error) {
//         console.log(error);
//     }    
// };

// habitacionCtrl.deleteHabitacion = async (req, res) => {
//     try {
//         await Habitacion.deleteOne({ tipo_hab: req.params.tipo_hab });
//         res.send("Eliminada Correctamente");

//     }catch (error) {
//         console.log(error);
//     }    
// };

module.exports = reservaCtrl;
