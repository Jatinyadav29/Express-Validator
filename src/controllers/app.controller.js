import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

const demo = (req, res) => {
  console.log("Hello ji");

  return res.status(200).json({
    message: "Hello Ji",
  });
};

const registerController = async (req, res) => {
  const { email, phone, password } = req.body;

  const user = await userModel.create({
    email,
    phone,
    passwordHash: await bcrypt.hash(password, 10),
  });

  return res.status(201).json({
    message: "User registered successfully",
    data: {
      eamil: user.email,
      phone: user.phone,
    },
  });
};

export { demo, registerController };
