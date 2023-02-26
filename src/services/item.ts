import { Item } from '../interfaces/item.interface'
import ItemModel from '../models/item'

const createNewItem = async ( item: Item ) => {
  const newItem = await ItemModel.create( item )
  return newItem
}

const getItemById = async ( id: string ) => {
  const item = await ItemModel.findById( id )
  return item
}

const getItemList = async () => {
  const itemList = await ItemModel.find()
  return itemList
}

const updateItemById = async ( id: string, data: Item ) => {
  const updatedItem = await ItemModel.findByIdAndUpdate( id, data, { new: true } )
  return updatedItem
}

const deleteItemById = async ( id: string ) => {
  const deletedItem = await ItemModel.findByIdAndDelete( id )
  return deletedItem
}

export { createNewItem, getItemById, getItemList, updateItemById, deleteItemById }