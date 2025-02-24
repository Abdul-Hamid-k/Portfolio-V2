import UserModel from '../models/user.model.js';
import { validationResult } from 'express-validator'
import { resetPassword } from '../services/resetPassword.service.js';
import updateDashboard from '../services/updateDashboard.service.js';
import jwt from 'jsonwebtoken'
import updateAbout from '../services/updateAbout.service.js';
import deleteSkill from '../services/deleteSkill.service.js';
import addSkill from '../services/addSkill.service.js';
import addService from '../services/addService.service.js';
import deleteService from '../services/deleteService.service.js';

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

export const IsTokenExpired = (req, res) => {

  const token = res.token

  // console.log('isTokenExpired token', token)

  if (!token) return res.status(200).json({ 'expired': true });
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const currentTime = Date.now() / 1000;
    return res.status(200).json({ 'expired': decodedToken.exp < currentTime });
  } catch (error) {
    console.error('Error decoding token:', error);
    return res.status(200).json({ 'expired': true });
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
  // console.log('API called')

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // TODO: image
  const { name, instaURL, linkedInURL, githubURL, homeHeading, homeContent } = req.body;
  const image = "Abdul hamid img"
  const userId = res.user.id
  // console.log({ userId: userId, image: image, name: name, instaURL: instaURL, linkedInURL: linkedInURL, githubURL: githubURL, homeHeading: homeHeading, homeContent: homeContent })

  console.log(userId)
  if (!userId || !image || !name || !instaURL || !linkedInURL || !githubURL || !homeHeading || !homeContent) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    const updatedUser = await updateDashboard(userId, image, name, instaURL, linkedInURL, githubURL, homeHeading, homeContent)
    return res.status(200).json({ message: "User Dashboard Updated successfully", updatedUser });
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Server Error:" + err });
  }
}

export const UpdateAbout = async (req, res) => {
  const errors = validationResult(req)
  // console.log('API called')

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // TODO: resume
  const resume = "resume"
  const { experienceYears, experienceMonths, aboutSummary } = req.body
  const userId = res.user.id
  // console.log({ userId: userId, experienceYears: experienceYears, experienceMonths: experienceMonths, aboutSummary: aboutSummary, resume: resume })

  if (!userId || !experienceYears || !experienceMonths || !aboutSummary || !resume) {
    return res.status(400).json({ message: "Please provide all required fields", userId: userId, experienceYears: experienceYears, experienceMonths: experienceMonths, aboutSummary: aboutSummary, resume: resume });
  }

  try {
    const updatedUser = await updateAbout(userId, experienceYears, experienceMonths, aboutSummary, resume)
    return res.status(200).json({ message: "User About Updated successfully", updatedUser });
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Server Error:" + err });
  }
}

export const DeleteSkill = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const userId = res.user.id;
  // console.log(req.body)
  const { skillName, skillLevel, category } = req.body;
  // console.log(userId, skillName)

  try {
    const updatedUser = await deleteSkill(userId, skillName, skillLevel, category)
    // console.log("updatedUser", updatedUser.skills)
    return res.status(200).json({ message: "skill deleted successfully", user: updatedUser });
  } catch (err) {
    console.error("Error deleting skill: ", err)
    return res.status(500).json({ message: "Server Error:" + err });
  }
}

export const AddSkill = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const userId = res.user.id;
  const { skillName, skillLevel, category } = req.body;

  try {
    const updatedUser = await addSkill(userId, skillName, skillLevel, category)
    return res.status(201).json({ message: "skill added successfully", user: updatedUser });
  } catch (err) {
    console.error('Error Adding Skill: ' + err)
    if (err.message === 'Skill already exists') {
      return res.status(406).json({ message: "Skill already exists" });
    }
    return res.status(500).json({ message: "Server Error: " + err });
  }
  // console.log(userId, skillName, skillDescription)
}

export const AddService = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const userId = res.user.id;

  const { serviceName, serviceDescription, serviceIcon, servicePoints } = req.body;
  // console.log({ "userId": userId, "serviceName": serviceName, "serviceDescription": serviceDescription, "serviceIcon": serviceIcon, "servicePoints": servicePoints })

  try {
    const user = await addService(userId, serviceName, serviceDescription, serviceIcon, servicePoints)
    return res.status(201).json({ message: "Service created successfully", user })
  } catch (e) {
    if (e.message === "Service already exists") {
      return res.status(406).json({ message: "Service already exists" });
    }
    console.error('Error Adding Service: ', e)
    return res.status(500).json({ message: "Server Error: " + e });
  }

}

export const DeleteService = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const userId = res.user.id;
  const { serviceName, serviceDescription, serviceIcon, servicePoints } = req.body;

  try {
    const updatedUser = await deleteService(userId, serviceName, serviceDescription, serviceIcon, servicePoints)
    return res.status(200).json({ message: "Service deleted successfully", user: updatedUser });
  } catch (err) {
    console.error('Error Deleting Service: ', err)
    return res.status(500).json({ message: "Server Error: " + err });
  }
}