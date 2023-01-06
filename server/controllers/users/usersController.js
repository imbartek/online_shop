const express = require('express')
const router = express.Router()
const client = require('../../db');

router.get('/users', function(res, req, next){
    const usersQuerry = 'SELECT * FROM users';

    client.querry(usersQuerry, function(err, result){
        if(err){
            throw err;
        }
        res.json(result.rows)
    })

})



module.exports = router;