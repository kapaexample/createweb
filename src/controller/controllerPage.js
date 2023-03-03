import db from '../models/index';
import CRUDService from '../services/CRUDService'
let getcrudPage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('crudPage.ejs',{
            data: JSON.stringify(data)
        });
    }catch(e) {
        console.log(e);
    }
}
    
let gethomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs',{
            data: JSON.stringify(data)
        });
    }catch(e) {
        console.log(e);
    }
    
}

let getaboutPage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('aboutPage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}
let postCRUD =async(req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('------------------------------------------------');
    console.log(data);
    console.log('------------------------------------------------');

    return res.send('get crud from controller');
}
module.exports = {
    gethomePage: gethomePage,
    getaboutPage: getaboutPage,
    getcrudPage: getcrudPage,
    postCRUD: postCRUD,
    displayGetCRUD:displayGetCRUD,
}