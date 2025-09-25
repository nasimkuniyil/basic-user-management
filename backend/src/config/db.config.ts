import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(`${process.env.MONGO_URI}/user-management-system`);
    console.log("db connected.");
  } catch (err) {
    console.log("mongodb connection failed");
  }
};

export default connectDB;
