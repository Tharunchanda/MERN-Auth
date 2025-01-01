import express from 'express';
import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Login Again' });
    }
    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!tokenDecoded || !tokenDecoded.id) {
            return res.status(401).json({ success: false, message: 'Not Authorized: Login Again' });
        }
        req.body.userId = tokenDecoded.id;

        next(); 
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default userAuth;
