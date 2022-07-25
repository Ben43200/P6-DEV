/**
 * @typedef {import("../controllers/userctrls").signup} signup
 * @typedef {import("../controllers/userctrls").login} login
 */

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrls');
//@ts-ignore
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;