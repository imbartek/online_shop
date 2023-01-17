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

    const checkEmailQuery = `SELECT * FROM users WHERE email = '${email}'`;
    client.query(checkEmailQuery, [], function (err, result) {
        console.log(checkEmailQuery)
        if (err) {
            res.json('Nie ma konta z takim adresem e-mail.')
        }
        else {
            const passwordFromDb = result[0].password;
            const id = result[0].id; 
            const name = result[0].name;
            const lastname = result[0].lastname;
            const email = result[0].email;
            const phone = result[0].phone;

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

router.post('/register', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const phone = req.body.phone;

    const hashedPass = bcrypt.hashSync(password, saltRounds);

    const checkEmailQuery = `SELECT count(email) as numberOfEmail FROM users WHERE email = '${email}'`;
    client.query(checkEmailQuery, [], function (err, result) {
        if (err) {
            return next(err);
        }
        else if (result[0].numberOfEmail > 0) {
            console.log(result[0].numberOfEmail)
            res.json('Ten adres e-mail jest już zajęty.')
        }
        else {
            const query = `INSERT INTO users (name, lastname, email, phone, password) VALUES ('${name}', '${lastname}', '${email}', ${phone}, '${hashedPass}')`;
            client.query(query, [], function (err, result) {
                console.log(query)
                if (err) {
                    return next(err);
                }
                else {
                    console.log(result);
                    res.json('Rejestracja przebiegła pomyślnie!')
                }
            })
        }
    })
})

module.exports = router;