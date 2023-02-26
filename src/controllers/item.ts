import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { createNewItem, deleteItemById, getItemById, getItemList, updateItemById } from '../services/item'

const getItem = async ( { params }: Request, res: Response ) => {
  try {
    const { id } = params
    const item = await getItemById( id )
    res.status( 200 ).send( { data: item } )
  } catch ( error ) {
    handleHttp( res, 'Error getting item' )
  }
}

const getItems = async ( req: Request, res: Response ) => {
  try {
    const itemList = await getItemList()
    res.status( 200 ).send( { data: itemList } )
  } catch ( error ) {
    handleHttp( res, 'Error getting items' )
  }
}

const createItem = async ( { body }: Request, res: Response ) => {
  try {
    const newItem = await createNewItem( body )
    res.status( 201 ).send( { data: newItem } )
  } catch ( error ) {
    handleHttp( res, 'Error creating item' )
  }
}

const updateItem = async ( { params, body }: Request, res: Response ) => {
  try {
    const { id } = params
    const updatedItem = await updateItemById( id, body )
    res.status( 200 ).send( { data: updatedItem } )
  } catch ( error ) {
    handleHttp( res, 'Error updating item' )
  }
}

const deleteItem = async ( { params }: Request, res: Response ) => {
  try {
    const { id } = params
    const deletedItem = await deleteItemById( id )
    if ( !deletedItem ) throw "Error"
    res.status( 204 ).send()
  } catch ( error ) {
    handleHttp( res, 'Error deleting item' )
  }
}

export { getItem, getItems, createItem, updateItem, deleteItem }