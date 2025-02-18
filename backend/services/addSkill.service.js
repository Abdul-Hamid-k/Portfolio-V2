import UserModel from "../models/user.model.js";

const addSkill = async (userId, skillName, skillLevel, category) => {
  if (!skillName || !skillLevel || !category) {
    throw new Error("All Fields are required")
  }

  const user = await UserModel.findById({ _id: userId })

  if (!user) {
    throw new Error("User not found")
  }

  // const skillNames = user.skills.filter(skill => skillName)
  // if (skillNames.includes)

  const isAlreadyExist = user?.skills.some(skill => skill.skillName === skillName)

  if (isAlreadyExist) {
    throw new Error("Skill already exists")
  }

  user.skills.push({
    'skillName': skillName,
    'skillLevel': skillLevel,
    'category': category
  })

  await user.save()
  return user;
}

export default addSkill;