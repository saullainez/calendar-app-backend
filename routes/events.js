/**
    Event routes
    /api/events

 */
const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Aplicar el middleware validateJWT para todas las rutas de eventos
router.use( validateJWT );

router.get('/', getEvents);
router.post(
    '/', 
    [
        check('title', 'El tìtulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').not().isEmpty(),
        check('start', 'La fecha de inicio no es válida').custom( isDate ),
        check('end', 'La fecha de fin es obligatoria').not().isEmpty(),
        check('end', 'La fecha de fin no es válida').custom( isDate ),
        validateFields
    ], createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;