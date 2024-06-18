import db from "../models/index"
const path = require('path');

let getHomePage = async(req, res) =>{
    try{
        let data = await db.khachhangs.findAll()
        console.log('----------------------')
        console.log(data)
        console.log('----------------------')
        return res.render('../App.ejs')
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    getHomePage: getHomePage,
}