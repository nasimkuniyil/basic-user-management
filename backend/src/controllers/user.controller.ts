 import { Request, Response } from "express";
import User from "../models/user.model";
import { IUser } from "../interfaces/user.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { GenerateAccessToken } from "../utils/authTokens";
import { createUser } from "../service/signup";

export const doLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Wrong password" });
    }

    const payload = { id: user._id, email: user.email, role:user.role };

    const accessToken = GenerateAccessToken(payload); 

    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_TOKEN_SECRET as string,
      { expiresIn: "7d" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });


    res.send({ message: "login success", accessToken,refreshToken, user });

  } catch (err) {
    console.log("user login error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const doRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!email?.trim()) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!password?.trim()) {
      return res.status(400).json({ error: "Mobile is required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("user already exist. email : ", existingUser.email);
      return res
        .status(409)
        .json({ error: "User already exists with this email" });
    }

    const newUser = await createUser({name, email, password, role:"user"});

    const payload = { id: newUser._id, email: newUser.email };

    const accessToken = jwt.sign(
      payload,
      process.env.JWT_ACCESS_TOKEN_SECRET as string,
      { expiresIn: "5min" }
    );

    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_TOKEN_SECRET as string,
      { expiresIn: "7d" }
    );

    res.cookie("token", accessToken, {
      httpOnly: true,
    });

    res.cookie("token", refreshToken, {
      httpOnly: true,
    });

    res.send({ message: "login success", accessToken: accessToken, user:newUser });
  } catch (err) {
    console.log("user login error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("id : ", id);

    if (!id?.trim()) {
      return res.status(404).json({ error: "Not found" });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send({ data: user });
  } catch (err) {
    console.log("user login error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id?.trim()) {
      return res.status(400).json({ error: "User id is required" });
    }

    let updatedData: Partial<IUser> = {};

    if (name?.trim()) {
      updatedData.name = name;
    }

    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const user = await User.findByIdAndUpdate(id, updatedData, {
      new: true
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send({ message: "profile updated successfull", data: user });
  } catch (err) {
    console.log("user profile edit error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
