import { createRequire } from "module";
const require = createRequire(import.meta.url);
import UserModel from "../models/user.model.js";
import utility from "../core/Utility.js";
const validationResult = require('express-validator/check').validationResult;
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import rand from 'csprng';
import fs from 'fs';
var Blob = require('blob');



let service = {} ;

service.add = async(req,res) =>{
    let firstName = req.body.firstName
    let lastName =  req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    console.log(data);
    utility.addDb( UserModel, data );
    res.send(data);
}
service.registerUser = async(req,res)=> {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    let response ={};
    var img = fs.readFileSync(req.file.path);
    let fileName =req.file.path;
    var encode_img = img.toString('base64');
    
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer(encode_img,'base64')
    };  
    
    let firstName = req.body.firstName
    let lastName =  req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let encryptedPassword = await bcrypt.hash(password, 10);
    const hash = crypto.createHash('sha256').update(password+rand).digest('hex');
    console.log(hash);

  let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        encryptedPassword: encryptedPassword,
        token: hash,
        fileName:fileName,
        img: final_img
    }
    console.log(data);
    let userData=await utility.addDb( UserModel, data );
    res.send(userData);
}
service.login = async(req ,res)=>{
    userName = req.body.email;
}

export default service;