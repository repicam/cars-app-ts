import { NextFunction, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { RequestExt } from '../interfaces/request-ext.interface'
import { verifyToken } from '../utils/jwt.handle'

const checkJwt = ( req: RequestExt, res: Response, next: NextFunction ) => {
  try {
    const authorization = req.headers?.authorization
    const jwt = authorization?.startsWith( 'Bearer' )
      ? authorization?.split( ' ' ).pop() : ''
    const payload = verifyToken( `${ jwt }` ) as JwtPayload
    req.jwt = payload
    next()
  } catch ( error ) {
    res.status( 400 ).send( { error: 'Error checking JWT' } )
  }
}

export { checkJwt }