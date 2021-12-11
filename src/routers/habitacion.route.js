const { Router } = require('express');
const router = Router();

const { getHabitaciones, getHabitacion, createHabitacion, editHabitacion, deleteHabitacion } = require('../controller/habitacion.controller');


router.get('/habitaciones', getHabitaciones);
router.get('/habitacion/:_num_hab', getHabitacion);
router.post('/habitacion', createHabitacion);
router.put('/habitacion/:_num_hab', editHabitacion);
router.delete('/habitacion/:_num_hab', deleteHabitacion);


module.exports = router;