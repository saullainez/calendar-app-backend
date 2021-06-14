/*
    Rutas de Auth
    host + /api/auth/
 */
const { Router } = require('express');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const router = Router();

router.post('/', loginUser);

router.post('/new', createUser);

router.get('/renew', revalidateToken);


module.exports = router;