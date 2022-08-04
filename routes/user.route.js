import express from 'express';
import userService from '../services/user.service.js';
import validaton from '../core/validation.js';
import utility from '../core/Utility.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();
console.log("val123");
const __dirname = path.resolve();
console.log("path",__dirname);


const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, '/uploads/'));
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname+ '-' + Date.now())
    }
});
var upload = multer({ storage: storage })


router.post('/addUser', userService.add);
router.post('/registerUser',validaton.register,upload.single('images'),userService.registerUser);

export default router;