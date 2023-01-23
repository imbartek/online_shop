const express = require('express');
const router = express.Router();
const client = require('../../db');


router.get('/', function(req, res, next){
    const usersQuerry = 'SELECT * FROM products';

    client.query(usersQuerry, function(err, result){
        if(err){
            throw err;
        }
        console.log(result)
        res.json(result)
    })

})

router.get('/:id', function(req, res, next){
    const id = req.query.id
    const usersQuerry = `SELECT products.*, sizes.value, sizes.quantity FROM products LEFT JOIN sizes ON products.id = sizes.id_product WHERE products.id = ${id}`;

    client.query(usersQuerry, function(err, result){
        if(err){
            throw err;
        }
        console.log(result)
        res.json(result)
    })

})



module.exports = router;