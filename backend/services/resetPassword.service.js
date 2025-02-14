import UserModel from "../models/user.model.js"

const resetPassword = async (email, password, newPassword) => {
  if (!email || !password || !newPassword) {
    throw new Error('To reset password, fields are required')
  }
  const hashedPassword = await UserModel.hashPassword(password)
  console.log(hashedPassword)
  const user = await UserModel.findOne({ email: email.toLowerCase(), password: password }).select('+password')

  user.password = hashedPassword
  await user.save()
  console.log(user)

  return user
}

export { resetPassword }