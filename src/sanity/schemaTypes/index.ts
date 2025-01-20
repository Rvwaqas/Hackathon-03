import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import Homeproduct from '../Homeproduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Homeproduct],
}




// {
//   _id,name,category,description,
//     stockLevel,price,discountPercentage,
//     "image":image.asset->url
// }