import express from 'express';
import {doLogin, doRegister, editProfile, getProfile} from '../controllers/user.controller';

const userRoutes = express.Router();

userRoutes.post("/login", doLogin);
userRoutes.post("/register", doRegister);
userRoutes.get("/profile/:id", getProfile);
userRoutes.put ("/edit/:id",editProfile);

export default userRoutes;