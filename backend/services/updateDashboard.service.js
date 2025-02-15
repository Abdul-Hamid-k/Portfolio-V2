import UserModel from "../models/user.model.js"

const updateDashboard = async (userId, userImg, username, instaURL, linkedInURL, githubURL, heading, content) => {
  if (!userId || !userImg || !username || !instaURL || !linkedInURL || !githubURL || !heading || !content) {
    throw new Error('All Fields are required')
  }

  const user = await UserModel.findByIdAndUpdate({ _id: userId }, {
    $set: {
      'image': userImg,
      'name': username,
      'instaURL': instaURL,
      'linkedInURL': linkedInURL,
      'githubURL': githubURL,
      'homeHeading': heading,
      'homeContent': content
    }
  }, { new: true })

  // user.image = userImg
  // user.name = username
  // user.instaURL = instaURL
  // user.linkedInURL = linkedInURL
  // user.githubURL = githubURL
  // user.homeHeading = heading
  // user.homeContent = content

  await user.save()
  console.log(user)
  return user
}

export default updateDashboard