import { Item } from '../interfaces/item.interface'
import ItemModel from '../models/item'

const createNewItem = async ( item: Item ) => {
  const newItem = await ItemModel.create( item )
  return newItem
}

export { createNewItem }