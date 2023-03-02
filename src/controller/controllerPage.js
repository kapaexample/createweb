import db from '../models/index';

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
let postCRUD =(req, res) => {
    console.log(req.body);
    return res.send('post crud from server');
}
module.exports = {
    gethomePage: gethomePage,
    getaboutPage: getaboutPage,
    getcrudPage: getcrudPage,
    postCRUD: postCRUD,
}