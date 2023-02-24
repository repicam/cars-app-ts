import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { createNewItem } from '../services/item'

const getItem = ( req: Request, res: Response ) => {
  try {

  } catch ( error ) {
    handleHttp( res, 'Error getting item' )
  }
}

const getItems = ( req: Request, res: Response ) => {
  try {

  } catch ( error ) {
    handleHttp( res, 'Error getting items' )
  }
}

const createItem = async ( { body }: Request, res: Response ) => {
  try {
    const newItem = await createNewItem( body )
    res.status( 201 ).json( { data: newItem } )
  } catch ( error ) {
    handleHttp( res, 'Error creating item' )
  }
}

const updateItem = ( req: Request, res: Response ) => {
  try {

  } catch ( error ) {
    handleHttp( res, 'Error updating item' )
  }
}

const deleteItem = ( req: Request, res: Response ) => {
  try {

  } catch ( error ) {
    handleHttp( res, 'Error deleting item' )
  }
}

export { getItem, getItems, createItem, updateItem, deleteItem }