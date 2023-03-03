import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encryptPassword, verifiedPassword } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const registerUser = async ( { email, password, name }: User ) => {
  const emailExists = await UserModel.findOne( { email } )
  if ( emailExists ) return

  const hashPassword = await encryptPassword( password )
  const newUser = await UserModel.create( { email, password: hashPassword, name } )

  const token = generateToken( `${ newUser._id }` )
  const data = {
    token,
    user: newUser
  }

  return data
}

const loginUser = async ( { email, password }: Auth ) => {
  const userExists = await UserModel.findOne( { email } )
  if ( !userExists ) return

  const correctPass = await verifiedPassword( password, userExists.password )

  if ( !correctPass ) return

  const token = generateToken( `${ userExists._id }` )
  const data = {
    token,
    user: userExists
  }

  return data
}

export { registerUser, loginUser }