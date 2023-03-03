import { Router } from 'express'
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item'

const router = Router()

router.route( '/' )
  .get( getItems )
  .post( createItem )
router.route( '/:id' )
  .get( getItem )
  .patch( updateItem )
  .delete( deleteItem )

export { router }