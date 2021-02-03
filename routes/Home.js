const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if(req.cookies.lang === "ar") {
        res.render('arabic/home', { page: 'Home' }); 
    } else {
        res.render('english/home', { page: 'Home' });
    }
});

router.post('/change/en', (req, res) => {
    res.cookie('lang', 'en');
    res.redirect('/');
})

router.post('/change/ar', (req, res) => {
    res.cookie('lang', 'ar');
    res.redirect('/');
})


module.exports = router;