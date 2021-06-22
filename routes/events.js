/**
    Event routes
    /api/events

 */
const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// Aplicar el middleware validateJWT para todas las rutas de eventos
router.use( validateJWT );

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;