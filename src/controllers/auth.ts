import { Request, Response } from 'express'
import { loginUser, registerUser } from '../services/auth'
import { handleHttp } from '../utils/error.handle'

const register = async ( { body }: Request, res: Response ) => {
  try {
    const registerResponse = await registerUser( body )
    if ( !registerResponse )
      res.status( 400 ).send( { error: 'Invalid register' } )

    res.status( 201 ).send( { data: registerResponse } )
  } catch ( error ) {
    handleHttp( res, 'Error user register' )
  }
}

const login = async ( { body }: Request, res: Response ) => {
  try {
    const { email, password } = body
    const loginResponse = await loginUser( { email, password } )
    if ( !loginResponse )
      res.status( 400 ).send( { error: 'Invalid credentials to login' } )

    res.status( 201 ).send( { data: loginResponse } )
  } catch ( error ) {
    handleHttp( res, 'Error user login' )
  }
}

export { register, login }