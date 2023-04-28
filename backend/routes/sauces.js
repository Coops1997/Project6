const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

const auth = require('../middleware/auth');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth,saucesCtrl.likeSauce); 

module.exports = router;
