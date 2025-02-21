import UserModel from "../models/user.model.js";

const deleteService = async (userId, serviceName, serviceDescription, serviceIcon, servicePoints) => {
  if (!userId || !serviceName || !serviceDescription || !serviceIcon || !servicePoints) {
    throw new Error("All Fields are required");
  }

  console.log(userId, serviceName, serviceDescription, serviceIcon, servicePoints)

  const user = await UserModel.findByIdAndUpdate({ _id: userId }, {
    $pull: {
      services: {
        serviceName: serviceName,
        serviceDescription: serviceDescription,
        serviceIcon: serviceIcon,
        servicePoints: servicePoints
      }
    }
  }, { new: true });
  return user;
}

export default deleteService