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

router.post('/create', function(req, res, next){
    const name = req.body.name;
    const desc = req.body.desc;
    const price = req.body.price;
    const image = req.body.image;
    const id_category = req.body.id_category;

    const insertQuery = `INSERT INTO products (name, description, price, image, id_category) VALUES ('${name}', '${desc}', ${price}, ${image}, ${id_category} ) returning id`;

    client.query(insertQuery, [], function(req, res, next){
        if(err){
            throw err;
        }
        console.log(result)
        res.json('Produkt dodany pomyślnie')
    })
})

router.post('/update', function(req, res, next){
    const id = req.body.id;
    const name = req.body.name;
    const desc = req.body.desc;
    const price = req.body.price;
    const image = req.body.image;
    const id_category = req.body.id_category;

    const nameQ = name ? ` name = '${name}'` : '';
    const descQ = desc ? ` desc = '${desc}'` : '';
    const priceQ = price ? ` price = ${price}` : '';
    const imageQ = image ? ` image = ${image}` : '';
    const idCatQ = id_category ? ` id_category = ${id_category}` : '';

    const updateQuery = `UPDATE products SET ${nameQ}, ${descQ}, ${priceQ}. ${imageQ}, ${idCatQ} WHERE id = ${id}`;

    client.query(updateQuery, [], function(err, result){
        if(err){
            throw err;
        }
        console.log(result)
        res.json('Produkt został edytowany');
    })
})

router.post('delete', function(req, res, next){
    const id = req.body.id;

    const deleteQuery = `DELETE FROM products WHERE id = ${id}`;

    client.query(deleteQuery, [], function(err, result){
        if(err){
            throw err;
        }
        console.log(result)
        res.json('Produkt został usunięty');
    })
})

module.exports = router;