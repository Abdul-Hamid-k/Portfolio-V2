import express from 'express';
import { getUserDetails, IsTokenExpired, loginUser, logoutUser, UpdateAbout, UpdateDashboard } from '../controllers/user.controller.js';
import { body } from 'express-validator';
import UserModel from '../models/user.model.js';
import { userAuth } from '../middelwares/user.middelware.js';

const router = express.Router()

router.get('/', getUserDetails)

router.get('/token-checker', userAuth, IsTokenExpired)

router.post(
  '/login', [
  body('email').isEmail().notEmpty().withMessage('Enter Valid Email'),
  body('password').notEmpty().withMessage('Password is required'),
], loginUser)

router.post('/logout', logoutUser)

router.post('/update-dashboard',
  [
    body('userId').isString().notEmpty().withMessage('ID is required'),
    // body('userImg').notEmpty().withMessage('Provide valid Image'),
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('instaURL').isString().withMessage('URL is required'),
    body('linkedInURL').isString().withMessage('URL is required'),
    body('githubURL').isString().withMessage('URL is required'),
    body('homeHeading').isString().notEmpty().withMessage('Heading is required'),
    body('homeContent').isString().notEmpty().withMessage('Content is required'),
  ]
  , userAuth
  , UpdateDashboard)

router.post('/update-about',
  [
    body('userId').isString().notEmpty().withMessage('ID is required'),
    body('experienceYears').isInt().notEmpty().withMessage('Experience Year is required'),
    body('experienceMonths').isInt().withMessage('Experience Months is required'),
    body('aboutSummary').isString().withMessage('About Summary is required'),
    body('resume').isString().withMessage('Resume is required'),
  ]
  , userAuth
  , UpdateAbout)


export default router