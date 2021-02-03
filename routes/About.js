const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/about', { page: 'About' });
    } else res.render('english/about', { page: 'About' });

})

module.exports = router;