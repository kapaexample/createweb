import express from 'express';
// thiet lap cau hinh cho views
let configViewEngine = (app) => {
    app.set('view engine','ejs');
    app.set('views','./src/views');
    app.use(express.static('./src/public'));
}
module.exports = configViewEngine;