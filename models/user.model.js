import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    encryptedPassword: {type: String},
    token: {type: String},
    img: {
        data:Buffer,
        contentType: String},
    fileName: { type: String},    

},{
    timestamps: true,
    collection: 'user'
}
);
const UserModel = mongoose.model('user',UserSchema );
export default UserModel;