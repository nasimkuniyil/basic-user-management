import { IUser } from "../interfaces/user.interface";
import bcrypt from "bcryptjs";
import User from "../models/user.model";


export async function createUser(userData:IUser){
    const {name, email, password, role} = userData;

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        name,
        email,
        password:hashedPassword,
        role
    });
    await newUser.save();
    return newUser;
}