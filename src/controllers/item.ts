import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

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

const createItem = ( req: Request, res: Response ) => {
  try {

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