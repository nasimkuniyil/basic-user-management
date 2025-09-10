import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},
{ timestamps: true });

const User = model<IUser>("User", UserSchema);

export default User;