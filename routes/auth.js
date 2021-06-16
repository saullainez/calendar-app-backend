/*
    Rutas de Auth
    host + /api/auth/
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const router = Router();

router.post(
    '/', 
    [
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'Correo no válido').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('password', 'La contraseña debe de ser de 6 caracteres').isLength({min: 6}),
    ],
    loginUser);

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'Correo no válido').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('password', 'La contraseña debe de ser de 6 caracteres').isLength({min: 6}),
    ], 
    createUser);

router.get('/renew', revalidateToken);


module.exports = router;