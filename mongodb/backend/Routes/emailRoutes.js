const express = require('express');
const router = express.Router();

// Example route
router.post('/send', (req, res) => {
    res.json({ message: 'Email route is working!' });
});

module.exports = router;
