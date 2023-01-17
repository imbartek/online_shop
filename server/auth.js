const jwt = require('jsonwebtoken');
const client = require('./db');

module.exports = function (req, res, next) {
    if (req.headers['x-auth']) {
        const fromToken = jwt.decode(req.headers['x-auth'], process.env.SECRET);
        const user_id = fromToken.user_id;
        const userQuery = `SELECT user_id FROM users WHERE user_id = ${user_id} AND user_status = true`;

        client.query(userQuery)
            .then(response => {
                if (response.rows.length === 1) {
                    req.auth = fromToken;
                    next();
                }
                else {
                    req.auth = false;
                    next();
                }
            })
            .catch(err => {
                console.err(err);
                next();
            })
    }
    else {
        next();
    }
}