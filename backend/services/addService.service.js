import UserModel from "../models/user.model.js";

const addService = async (userId, serviceName, serviceDescription, serviceIcon, servicePoints) => {
  if (!serviceName || !serviceDescription || !serviceIcon || !servicePoints) {
    throw new Error("All Fields are required");
  }

  const user = await UserModel.findById({ _id: userId })

  if (!user) {
    throw new Error("User not found");
  }

  if (user.services.some(service => service.serviceName === serviceName)) {
    throw new Error("Service already exists");
  }

  user.services.push({
    serviceName,
    serviceDescription,
    serviceIcon,
    servicePoints: servicePoints.split('//').map(service => service.trim())
  });

  await user.save();

  return user
}

export default addService;