const  express = require('express');
const  router = express.Router();
const nav = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/",
        title: "Skit ner dig"
    },
    {
        url: "/ajjamen",
        title: "Error"
    }
];

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Ajjamen! (through route)',
        title: 'Very cool',
        nav: nav,
    });
});

module.exports = router