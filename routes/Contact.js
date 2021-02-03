const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/contact', { page: 'Contact' });
    } else res.render('english/contact', { page: 'Contact' });
})

module.exports = router;