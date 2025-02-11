import mongoose from 'mongoose';

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

const UserModel = mongoose.model('User', UserSchema)

export default UserModel