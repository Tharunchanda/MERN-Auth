import pkg from 'jsonwebtoken';
const { verify } = pkg;

import mongoose, { mongo } from "mongoose";


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyOtp: { type: String, default: '' },    
    verifyOtpExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: '' },
    resetOtpExprieAt: { type: Number, default: 0 },
    
})

const userModel = mongoose.models.user || mongoose.model('user', UserSchema);
export default userModel;