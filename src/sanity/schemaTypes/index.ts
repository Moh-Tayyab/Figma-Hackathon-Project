import { product } from '../product'
import { category } from '../category'
import { type SchemaTypeDefinition } from 'sanity'
import { banner } from '../banner'
import { blog } from '../blog/main'
import { subPost } from '../blog/subPost'
import { author } from '../blog/author'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, banner, blog, subPost, author, ]
}
