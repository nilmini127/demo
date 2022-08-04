import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { check } = require('express-validator/check');
import Utility from '../core/Utility.js';
import UserModel from '../models/user.model.js';

let validation = {};

validation.register = [
    check('email').isEmail()
        .exists()
        .custom(async function (value, { req, res }) {
            let query = { email: value };
            let data = await Utility.getOneDb(UserModel, query);
            return data ? false : true;
        }).withMessage("emailAlreadyUsed"),
]

export default validation;