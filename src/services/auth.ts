import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encryptPassword } from '../utils/bcrypt.handle'

const registerUser = async ( { email, password, name }: User ) => {
  const emailExists = await UserModel.find( { email } )
  if ( emailExists ) return
  const hashPassword = await encryptPassword( password )
  const newUser = await UserModel.create( { email, password: hashPassword, name } )
  return newUser
}

const loginUser = async ( { email, password }: Auth ) => {
}

export { registerUser, loginUser }