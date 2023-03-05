import { Storage } from '../interfaces/storage.interface'
import StorageModel from '../models/storage'

const saveFile = async ( storage: Storage ) => {
  const newFile = await StorageModel.create( storage )
  return newFile
}

export { saveFile }