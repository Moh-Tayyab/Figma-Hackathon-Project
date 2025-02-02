
import { category } from './category'
import { type SchemaTypeDefinition } from 'sanity'
import { myproduct } from './myproduct'
import { customer } from './customer'
import { order } from './order'
import { orderItem } from './orderItem'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ category, myproduct, order, customer, orderItem]
}
