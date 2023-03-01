import db from '../models/index';

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

let getaboutPage = (req, res) => {
    return res.render('aboutPage.ejs');
}
module.exports = {
    gethomePage: gethomePage,
    getaboutPage: getaboutPage
}