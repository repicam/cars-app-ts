import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = <string> process.env.JWT_SECRET

const generateToken = async ( email: string ) => {
  const token = await sign( { email }, JWT_SECRET )
  return token
}

const verifyToken = async ( token: string ) => {
  const isTokenValid = await verify( token, JWT_SECRET )
  return isTokenValid
}

export { generateToken, verifyToken }