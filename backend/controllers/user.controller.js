import UserModel from '../models/user.model.js';
import { validationResult } from 'express-validator'
import { resetPassword } from '../services/resetPassword.service.js';
import updateDashboard from '../services/updateDashboard.service.js';

export const getUserDetails = async (req, res) => {
  // console.log(res.user)
  try {
    const user = await UserModel.find({})
    // console.log(user)
    return res.status(200).json({ message: "profile", user: user[0] });

  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Server Error" });
  }

}

export const loginUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  // console.log(email, password);

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email and password" });
  }

  // Check if user exists
  const user = await UserModel.findOne({ email: `${email.toLowerCase()}` }).select('+password');
  if (!user) {
    return res.status(404).json({ message: "Invalid Credentials" });
  }

  // Check if password is correct
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = await user.generateAuthToken();
  delete user.password
  res.user = user;
  res.cookie('token', token);

  return res.status(200).json({ message: "Logged in", token, user })
}

export const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: "Logged out" });
}

export const UpdateDashboard = async (req, res) => {
  const errors = validationResult(req)
  console.log('API called')

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, userImg, username, instaURL, linkedInURL, githubURL, heading, content } = req.body;

  // console.log({ userId: userId, userImg: userImg, username: username, instaURL: instaURL, linkedInURL: linkedInURL, githubURL: githubURL, heading: heading, content: content })

  console.log(userId)
  if (!userId || !userImg || !username || !instaURL || !linkedInURL || !githubURL || !heading || !content) {
    return res.status(400).json({ message: "Please provide all required fields", userId, userImg, username, instaURL, linkedInURL, githubURL, heading, content });
  }

  try {
    const updatedUser = await updateDashboard(userId, userImg, username, instaURL, linkedInURL, githubURL, heading, content)
    return res.status(200).json({ message: "User Updated successfully", updatedUser });
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Server Error:" + err });
  }
}