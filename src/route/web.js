import express from 'express';
import controllerPage from '../controller/controllerPage';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', controllerPage.gethomePage);
    router.get('/about', controllerPage.getaboutPage);
    return app.use('/',router);
}
module.exports = initWebRoutes;