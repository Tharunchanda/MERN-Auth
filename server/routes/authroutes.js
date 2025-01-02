import express from 'express';
import { register,login,logout,sendVerifyOtp, VerifyEmail, SendResetOtp, resetPassword, isAuthenticated } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout); 
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('/verify-account', userAuth, VerifyEmail);
authRouter.get('/is-auth', userAuth, isAuthenticated);
authRouter.post('/send-reset-otp', SendResetOtp);
authRouter.post('/reset-password',resetPassword);

export default authRouter;