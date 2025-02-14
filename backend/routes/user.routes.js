import express from 'express';
import { getUserDetails, loginUser } from '../controllers/user.controller.js';
import { body } from 'express-validator';
import UserModel from '../models/user.model.js';
import { userAuth } from '../middelwares/user.middelware.js';

const router = express.Router()

router.get('/', getUserDetails)

router.post(
  '/login', [
  body('email').isEmail().notEmpty().withMessage('Enter Valid Email'),
  body('password').notEmpty().withMessage('Password is required'),
], loginUser)

router.post('/logout', logoutUser)

export default router