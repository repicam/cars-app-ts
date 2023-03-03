import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = <string> process.env.JWT_SECRET

const generateToken = ( id: string ) => {
  const token = sign( { id }, JWT_SECRET )
  return token
}

const verifyToken = ( token: string ) => {
  const isTokenValid = verify( token, JWT_SECRET )
  return isTokenValid
}

export { generateToken, verifyToken }