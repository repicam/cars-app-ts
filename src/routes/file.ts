import { Router } from 'express'
import { uploadFile } from '../controllers/storage'
import { checkJwt } from '../middleware/jwt'
import multerMiddleware from '../middleware/multer'

const router = Router()

router.post( '/', checkJwt, multerMiddleware.single( 'file' ), uploadFile )

export { router }