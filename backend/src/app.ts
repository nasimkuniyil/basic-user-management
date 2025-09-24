import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import connectDB from "./config/db";
import cors from 'cors';

import userRoutes from "./routes/user.routes";


const app = express();
const PORT = process.env.PORT || 3000;

//connect db
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    console.log("middleware running");
    console.log("req body :", req.body);
    next();
})

app.use("/api/user/",userRoutes);

interface IPosts{
    author:string;
    title:string;
}

const posts: IPosts [] = [
    {
        author:"Nasim",
        title:"The way to Code"
    },
    {
        author:"Basheer",
        title:"More about C++"
    }
]

app.get('/posts', (req,res)=>{
    res.json(posts);
})

app.listen(PORT, ()=> console.log(`server started at ${PORT} port`));