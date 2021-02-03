const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/faq', { page: 'Faq' });
    } else res.render('english/faq', { page: 'Faq' });
})

module.exports = router;