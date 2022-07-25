/**
 * @typedef {import("express").Request} request
 * @typedef {import("express").Response} response
 * @typedef {import("express").NextFunction} nextFunction
 * @typedef {import("../middleware/auth").authentifiedRequest} authentifiedRequest
 * @typedef {import("../middleware/multer-config").multerRequest} multerRequest
//  * @typedef {import("../controllers/saucectrls").createSauce} createSauce
//  *
//  * @typedef {import("../controllers/saucectrls").getOneSauce} getOneSauce
//  * @typedef {import("../controllers/saucectrls").modifySauce} modifySauce
//  * @typedef {import("../controllers/saucectrls").deleteSauce} deleteSauce
*/




const express = require('express');
const router = express.Router(); 




const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauceCtrls');
router.get('/', auth, sauceCtrl.getAllSauce);
/*@ts-ignore*/
router.post('/', auth, multer,  sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
/*@ts-ignore*/
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
/*@ts-ignore*/
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeDislike)


module.exports = router;

