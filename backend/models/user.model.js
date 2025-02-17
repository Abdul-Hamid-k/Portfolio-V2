import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    minlength: 8,
    select: false
  },
  image: {
    type: String,
    default: 'default.jpg'
  },
  instaURL: {
    type: String,
    unique: true,
  },
  linkedInURL: {
    type: String,
    unique: true,
  },
  githubURL: {
    type: String,
    unique: true,
  },
  homeHeading: {
    type: String,
    minlength: 10,
    maxlength: 100
  },
  homeContent: {
    type: String,
    minlength: 100,
    maxlength: 5000
  },
  experienceYears: {
    type: Number,
    default: 1
  },
  experienceMonths: {
    type: Number,
    default: 5
  },
  aboutSummary: {
    type: String,
    minlength: 10,
    maxlength: [500, 'Length should be less tha 500 characters.']
  },
  resume: {
    type: String
  }
})

UserSchema.methods.generateAuthToken = function () {
  // generate auth token
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })
  return token
}

UserSchema.statics.hashPassword = async function (password) {
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}

UserSchema.statics.chechIsTokenExpired = async function (token) {
  // check if token is expired
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    return false
  } catch (err) {
    return true
  }
}

UserSchema.methods.comparePassword = async function (password) {
  // compare password
  // return password === this.password
  return await bcrypt.compare(password, this.password)
}

const UserModel = mongoose.model('User', UserSchema)

export default UserModel