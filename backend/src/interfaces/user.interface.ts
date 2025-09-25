import { Document } from "mongoose";

export interface IUser{
    name : string;
    email : string;
    password : string;
    role:string;
    isBlocked?: boolean;
    isDeleted?: boolean;
}