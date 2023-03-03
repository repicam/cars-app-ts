import { Request, Response } from 'express'
import { registerUser } from '../services/auth'
import { handleHttp } from '../utils/error.handle'

const register = async ( { body }: Request, res: Response ) => {
  try {
    const newUser = await registerUser( body )
    res.status( 201 ).send( { data: newUser } )
  } catch ( error ) {
    handleHttp( res, 'Error user register' )
  }
}

const login = async ( { body }: Request, res: Response ) => {
  try {

  } catch ( error ) {
    handleHttp( res, 'Error user login' )
  }
}

export { register, login }