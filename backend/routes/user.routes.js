import express from 'express';
import UserModel from '../models/user.model.js';

const router = express.Router()

router.get('/', async (req, res) => {
  const user = await UserModel.find({})
  return res.status(200).json({ user });
})

export default router