import { Response } from 'express'
import { RequestExt } from '../interfaces/request-ext.interface'
import { Storage } from '../interfaces/storage.interface'
import { saveFile } from '../services/storage'
import { handleHttp } from '../utils/error.handle'

const uploadFile = async ( { file, jwt }: RequestExt, res: Response ) => {
  try {
    const storageData: Storage = {
      fileName: `${ file?.filename }`,
      path: `${ file?.path }`,
      idUser: `${ jwt?.id }`
    }

    const uploadResponse = await saveFile( storageData )

    res.status( 201 ).send( { data: uploadResponse } )
  } catch ( error ) {
    handleHttp( res, 'Error uploading file' )
  }
}

export { uploadFile }