const express = require('express');
const { createOrder, verifyPayment, getRazorpayKey } = require('../controllers/paymentController');

const router = express.Router();

router.get('/getkey', getRazorpayKey);
router.post('/order', createOrder);
router.post('/verify', verifyPayment);

module.exports = router;
