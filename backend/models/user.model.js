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
  summaryHeading: {
    type: String,
    minlength: 10,
    maxlength: 100
  },
  summaryContent: {
    type: String,
    minlength: 100,
    maxlength: 300
  }
})

UserSchema.methods.generateAuthToken = async function () {
  // generate auth token
  const token = await jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })
  return token
}

UserSchema.statics.hashPassword = async function (password) {
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}

UserSchema.methods.comparePassword = async function (password) {
  // compare password
  // return password === this.password
  return await bcrypt.compare(password, this.password)
}

const UserModel = mongoose.model('User', UserSchema)

export default UserModel