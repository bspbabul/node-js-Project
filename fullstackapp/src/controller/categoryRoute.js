let express=require('express');
let categoryRouter=express.Router();
let mongodb =require('mongodb').MongoClient
let url=27017





categoryRouter.route('/').get(function(req, res) {
        res.send(category) 
    }
    )

categoryRouter.route('/details').get(function(req, res) {
        res.send('category details') 
    }
    )
module.exports = categoryRouter