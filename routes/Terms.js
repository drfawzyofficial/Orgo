const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/terms', { page: 'Terms' });
    } else res.render('english/terms', { page: 'Terms' });

})

module.exports = router;