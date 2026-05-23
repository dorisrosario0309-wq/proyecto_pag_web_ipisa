const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/registrar', { 
        layout: 'layouts/auth'
    });
});

module.exports = router;