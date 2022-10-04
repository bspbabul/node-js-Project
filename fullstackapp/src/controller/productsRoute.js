let express=require('express');
let productsRouter=express.Router();


productsRouter.route('/').get(function(req, res) {
        res.send(products) 
    }
    )
productsRouter.route('/details').get(function(req, res) {
        res.send('product details') 
    }
    )
module.exports = productsRouter