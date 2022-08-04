import mongoose from 'mongoose';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config()

let connectionString = process.env.DB_CONNECTION;
    
const connectToDb = async () => {
    
    try {
        mongoose.connect(connectionString, {     useNewUrlParser: true,
            
            useUnifiedTopology: true});
        console.log('Mongodb connected');
    }
    catch (err) {
        console.log(err);
        console.log('Could not connect to MongoDB');
    }
}


export default connectToDb;