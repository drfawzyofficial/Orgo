const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/products', { page: 'Products' });
    } else res.render('english/products', { page: 'Products' });
})

module.exports = router;