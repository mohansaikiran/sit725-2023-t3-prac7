let collection = require('../models/cat');

const postCat = (req,res) => {
    let cat = req.body;
    collection.postCat(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'Cat added successfully'});
        }
    });
}

const getAllCats = (req,res) => {
    collection.getAllCats((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'All cats fetched'});
        }
    });
}

const deleteCat = (req,res) => {
    let cat = req.body;
    collection.deleteCat(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'Cat deleted successfully'});
        }
    });
}

module.exports = {postCat,getAllCats,deleteCat}