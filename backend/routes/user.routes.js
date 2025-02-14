import express from 'express';
import { getUserDetails, loginUser } from '../controllers/user.controller.js';
import { body } from 'express-validator';
import UserModel from '../models/user.model.js';

const router = express.Router()

router.get('/', getUserDetails)

router.post(
  '/login', [
  body('email').isEmail().notEmpty().withMessage('Enter Valid Email'),
  body('password').notEmpty().withMessage('Password is required'),
], loginUser)


export default router