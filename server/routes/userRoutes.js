import express from 'express';
import jwt from 'jsonwebtoken';
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

export default userRouter;