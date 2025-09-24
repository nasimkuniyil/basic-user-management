import jwt from 'jsonwebtoken';
import {ObjectId } from 'mongodb';

export function GenerateAccessToken(payload:{id:ObjectId, email:string}){
    return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET as string, {expiresIn:'30s'})
}