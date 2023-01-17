const express = require('express');
const router = express.Router();
const client = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const saltRounds = 10;

router.post('/', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    client.query(`SELECT id, name, lastname, password, email, phone FROM users WHERE mail = ${email}`, [], function (err, result) {
        if (err) {
            return next(err)
        }
        else if (result.rows.length === 0) {
            res.json('Nie ma konta z takim adresem e-mail.')
        }
        else {
            const { passwordFromDb, id, name, lastname, email, phone } = result.rows[0];

            if (bcrypt.compareSync(password, passwordFromDb)) {
                const token = jwt.sign({
                    name: name,
                    lastname: lastname,
                    id: id,
                    email: email,
                    phone: phone
                }, process.env.SECRET)

                req.session.user = {
                    name: name,
                    id: id
                }
                req.session.save();
                res.json({ token, id })
            }
            else {
                res.json('Podane hasło lub e-mail jest niepoprawne.')
            }
        }
    })
})

router.post('/register', function (req, res, next){
    const {email, password, name, lastname, phone} = req.body;

    const hash = bcrypt.hashSync(password, saltRounds, function(err, result){
        client.query(`INSERT INTO users (name, lastname, email, phone, password) VALUES ('${name}', '${lastname}', '${email}', ${phone}, '${hash}')`, [], function(err, result){
            if(err){
                return next(err);
            }
            else{
                console.log(result);
            }
        })
    })
})

module.exports = router;