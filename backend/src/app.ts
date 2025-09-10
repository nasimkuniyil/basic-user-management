import express from "express";
import connectDB from "./config/db";

import userRoutes from "./routes/user.routes";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

//connect db
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use((req, res, next)=>{
    console.log("hey : ",req.body)
    next();
})

app.use("/api/user/",userRoutes);

app.listen(PORT, ()=> console.log(`server started at ${PORT} port`));