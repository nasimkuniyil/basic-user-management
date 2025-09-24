import express from 'express';
import {doLogin, doRegister, editProfile, getProfile} from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const userRoutes = express.Router();

userRoutes.post("/login", doLogin);
userRoutes.post("/register", doRegister);
userRoutes.get("/profile/:id" ,authenticateToken, getProfile);
userRoutes.put ("/edit/:id",authenticateToken, editProfile);
// userRoutes.delete("/logout");

export default userRoutes;