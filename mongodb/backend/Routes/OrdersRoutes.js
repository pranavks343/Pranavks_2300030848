const express = require('express');
const { createOrders, getOrders, updateOrders, deleteOrders } = require('../Controllers/OrdersController');
const router = express.Router();

router.post('/orders', createOrders);
router.get('/orders', getOrders);
router.put('/orders/:id', updateOrders);
router.delete('/orders/:id', deleteOrders);

module.exports = router;