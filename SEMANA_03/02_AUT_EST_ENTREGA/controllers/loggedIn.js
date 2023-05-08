const db = require('../routes/db-config');
const jwt = require('jsonwebtoken');


const loggedIn = (req, res, next) => {
    if (!req.cookies.userRegistered) {
        res.json({status : false, user: undefined})
        return next();
    }
    try {
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
        // sqlite
        db.get('SELECT * FROM users WHERE id = ?', [decoded.id], (err, row) => {
            if (err) {
                res.json({status : false, user: undefined})
                return next();
            }
            req.user = row;
            user = row;
            res.json({status : true, user: user})
            console.log(user)
            return next();
        });
    } catch (err) {
        if (err) {
            res.json({status : false, user: undefined})
            return next()
        }
    }
}

module.exports = loggedIn;