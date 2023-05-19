// desc Auth user/set token
//route POST /api/users/auth
//@access Public
import asyncHandler from "express-async-handler";
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Something went wrong");

  res.status(200).json({ message: "Auth User" });
});

//desc Register a new user
//router Post /api/users
//access Public 
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" });
  });

//logout user
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout User" });
  });

//get user profile
//private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout User" });
  });

export { authUser };
