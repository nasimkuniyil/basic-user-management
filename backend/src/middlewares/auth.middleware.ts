import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
    user?: string | JwtPayload;
}

export const authenticateToken = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.split(" ")[1];
    try {
        console.log("here is the auth control.")
        if (!token) return res.status(401).json({ success: false });
        console.log("verifiying jwt...")
        const decoded = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET as string);
        req.user = decoded;
        next();
    } catch (err) {
        return next(err);
        console.log("auth middleware error.", err);
        res.status(401).json({ success: false, message: "authontication invalid" })
    }
}