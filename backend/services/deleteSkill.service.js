import UserModel from "../models/user.model.js"

const deleteSkill = async (userId, skillName) => {

  const user = await UserModel.findById(userId)

  if (!user) {
    throw new Error("User not found")
  }

  console.log('user', user?.experienceMonths)
  // console.log('user skills', user["skills"])
  // console.log('user', user)
  user?.skills?.filter(async (skill, index) => {
    if (skill.skillName.toLowerCase() === skillName.toLowerCase()) {
      console.log(skill.skillName === skillName, index)
      await UserModel.updateOne({ '_id': userId }, { '$pull': { 'skills': skill } });
    }
  })
  // console.log('removeIndex', user)

  return user
}

export default deleteSkill