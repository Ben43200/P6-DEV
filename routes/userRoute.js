const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrls');

router.post('/auth/signup', userCtrl.signup);
router.post('/auth/login', userCtrl.login);

module.exports = router;