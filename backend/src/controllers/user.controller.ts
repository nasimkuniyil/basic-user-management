import { Request, Response } from "express";
import User from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

export const doLogin = async (req: Request, res: Response) => {
  try {
    res.send({ message: "login success" });
  } catch (err) {
    console.log("user login error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const doRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!email?.trim()) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!mobile) {
      return res.status(400).json({ error: "Mobile is required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("user already exist. email : ", existingUser.email);
      return res
        .status(409)
        .json({ error: "User already exists with this email" });
    }

    const newUser = new User<IUser>({ name, email, mobile });
    await newUser.save();

    res.send({ message: "user created", user: newUser });
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
    const { name, mobile } = req.body;

    if (!id?.trim()) {
      return res.status(400).json({ error: "User id is required" });
    }

    let updatedData: Partial<IUser> = {};

    if (name?.trim()) {
      updatedData.name = name;
    }

    if (mobile?.trim()) {
      updatedData.mobile = mobile;
    }

    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const user = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
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
