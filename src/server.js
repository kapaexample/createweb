import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from '../src/config/viewEngine';
import configWebRoutes from '../src/route/web';
import connectDB from '../src/connectDB';
require('dotenv').config();

let port = process.env.PORT || 6969;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
configWebRoutes(app);
connectDB();
app.listen(port);