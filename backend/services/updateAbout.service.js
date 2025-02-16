import UserModel from "../models/user.model.js"

const updateAbout = async (userId, experienceYears, experienceMonths, aboutSummary, resume) => {
  if (!userId || !experienceYears || !experienceMonths || !aboutSummary || !resume) {
    throw new Error('All Fields are required')
  }

  const user = await UserModel.findByIdAndUpdate({ _id: userId }, {
    $set: {
      'experienceYears': experienceYears,
      'experienceMonths': experienceMonths,
      'aboutSummary': aboutSummary,
      'resume': resume
    }
  })

  return user
}

export default updateAbout