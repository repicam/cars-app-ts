import { model, Schema } from 'mongoose'
import { Item } from '../interfaces/item.interface'

const ItemSchema = new Schema<Item>(
  {
    name: {
      type: String,
      required: true
    },
    color: String,
    gas: {
      type: String,
      enum: [ 'gasoline', 'electric' ],
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    description: String,
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const ItemModel = model( 'Item', ItemSchema )
export default ItemModel