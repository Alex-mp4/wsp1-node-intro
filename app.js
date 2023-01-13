const express = require('express');

const app = express();
const port = 3058;
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/index');
const createError = require('http-errors')
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

app.use(express.static('public'))
app.use('/', indexRouter);
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.njk');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});