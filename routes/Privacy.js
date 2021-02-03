const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/privacy', { page: 'Privacy' });
    } else res.render('english/privacy', { page: 'Privacy' });

})

module.exports = router;