const express = require('express');
const router = express.Router();
const client = require('../../db');


router.get('/', function(req, res, next){
    const usersQuerry = 'SELECT * FROM users';

    client.query(usersQuerry, function(err, result){
        if(err){
            throw err;
        }
        console.log(result)
        res.json(result)
    })

})



module.exports = router;