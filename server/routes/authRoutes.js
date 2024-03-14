const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');
const { loginValidation } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', loginValidation, login);
router.post('/logout', logout);

module.exports = router;
