import { model, Schema } from 'mongoose'
import { Storage } from '../interfaces/storage.interface'

const StorageSchema = new Schema<Storage>(
  {
    fileName: String,
    path: String,
    idUser: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const StorageModel = model( 'Storage', StorageSchema )
export default StorageModel