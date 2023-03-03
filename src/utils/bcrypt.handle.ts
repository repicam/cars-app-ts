import { hash, compare } from 'bcrypt'

const ROUND_HASH = 10

const encryptPassword = async ( plainPassword: string ) => {
  const hashPassword = await hash( plainPassword, ROUND_HASH )
  return hashPassword
}

const verifiedPassword = async ( plainPassword: string, hashPassword: string ) => { 
  const isCorrect = await compare( plainPassword, hashPassword )
  return isCorrect
}

export { encryptPassword, verifiedPassword }