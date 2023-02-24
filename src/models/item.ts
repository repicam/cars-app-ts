import { model, Schema } from 'mongoose'
import { Item } from '../interfaces/item.interface'

const ItemSchema = new Schema<Item>(
  {
    name: String,
    color: String,
    gas: {
      type: String,
      enum: [ 'gasoline', 'electric' ]
    },
    year: Number,
    description: String,
    price: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const ItemModel = model( 'Item', ItemSchema )
export default ItemModel