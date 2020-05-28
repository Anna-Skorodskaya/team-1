var express = require('express');
var router = express.Router();

function indexPage(req, res, next) {
    const login = req.cookies.login;
    if (login !== undefined) {
        res.locals.greeting = `ПРИВЕТ, ${login}!`;
        res.locals.action = "РАЗЛОГИНИТЬСЯ";
        res.locals.loggedInDirection="";
        res.locals.direction = "/api/logout";
    } else {
        res.locals.action = "ЗАЛОГИНИТЬСЯ";
        res.locals.direction = "/login";       
        res.locals.greeting = "ЗАРЕГАТЬСЯ";
        res.locals.loggedInDirection="/reg";
    }

    res.locals.title = 'История IE';
    var html = jade.renderFile('./views/index.jade', res.locals);
    res.send(html);
}

function regPage(req, res, next) {
    res.locals.title = 'Реганье';    
    var html = jade.renderFile('./views/reg.jade', res.locals);
    res.send(html);
}

function loginPage(req, res, next) {
    res.locals.title = 'Залогинство';
    var html = jade.renderFile('./views/login.jade', res.locals);
    res.send(html);
}

router.get('/', indexPage);
router.get('/reg', regPage);
router.get('/login', loginPage);

module.exports = router;