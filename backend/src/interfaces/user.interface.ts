import { Document } from "mongoose";

export interface IUser{
    name : string;
    email : string;
    password : string;
    isBlocked?: boolean;
    isDeleted?: boolean;
}