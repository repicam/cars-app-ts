import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'

const checkJwt = ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const authorization = req.headers?.authorization
    const jwt = authorization?.startsWith( 'Bearer' )
      ? authorization?.split( ' ' ).pop() : ''
    verifyToken( `${ jwt }` )
    next()
  } catch ( error ) {
    res.status( 400 ).send( { error: 'Error checking JWT' } )
  }
}

export { checkJwt }