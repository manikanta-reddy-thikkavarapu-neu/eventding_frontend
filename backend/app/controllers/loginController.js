const bcrypt = require('bcrypt');
const loginServices = require('../services/loginServices');
const loginUserModel = require('../model/loginUserModel');
const validator = require('../utilities/Validator');

const login = (req, res) => {
    try {

    }
    catch (err) {
        res.status(400);
        res.json({ "message": err.message });
    }
}

module.exports = { login };