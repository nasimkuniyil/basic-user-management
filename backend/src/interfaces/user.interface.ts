import { Document } from "mongoose";

export interface IUser{
    name : string;
    email : string;
    mobile : number;
    isBlocked?: boolean;
    isDeleted?: boolean;
}