import UserModel from "../models/user.model.js"

const deleteSkill = async (userId, skillName, skillLevel, category) => {

  const user = await UserModel.findById(userId)

  if (!user) {
    throw new Error("User not found")
  }

  const updatedUser = await UserModel.findOneAndUpdate(
    { '_id': userId },
    {
      '$pull':
      {
        'skills':
          { skillName, skillLevel, category }
      }
    },
    { new: true });

  console.log('user', updatedUser.skills)
  return updatedUser
}

export default deleteSkill