const { Router } = require('express');
const router = Router();

const { getReservas, getReserva, createReserva} = require('../controller/reserva.controller');

router.get('/reservas', getReservas);
router.get('/reserva/:id', getReserva);
router.post('/reserva', createReserva);
// router.put('/reserva/:id', editReserva);
// router.delete('/reserva/:id', deleteReserva);

module.exports = router;