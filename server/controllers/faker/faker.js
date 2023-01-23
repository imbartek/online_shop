const express = require('express');
const router = express.Router();
const client = require('../../db');
const { faker } = require('@faker-js/faker/locale/pl');

router.get('/getRandomProducts', function(req, res, next){
    const generateRandoms = async () => {
        let arr = [];
        for(let i = 1; i < 5; i++){
            const name = faker.commerce.product();
            const description = faker.commerce.productDescription();
            const price = faker.commerce.price(10, 200);
    
            const query = `INSERT INTO products (name, description, price) VALUES ('${name}', '${description}', ${price});`;
    
            client.query(query, [], (err, result) => {
                console.log(query)
                if(err){
                    next(err);
                }
                console.log(`Product: ${name} zostal dodany do bazy`);
                arr.pop(name)
            })
        }
        return arr;
    }
    generateRandoms().then(response => {
        res.sendStatus(200);
    })
})

module.exports = router;