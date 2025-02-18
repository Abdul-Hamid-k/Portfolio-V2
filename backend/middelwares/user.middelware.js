import jwt from 'jsonwebtoken'

export const userAuth = (req, res, next) => {
  const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')[1]
  // console.log(req?.headers)

  console.log('Auth token:', token)

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Please log in.' })
  }

  // Verify token using JWT
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    res.user = decoded

    res.token = token
    // console.log('cookie set Auth: ', res.token)
    next()

  } catch (error) {
    console.error(error)
    return res.status(403).json({ message: 'Invalid token. Please log in again.' })
  }

}