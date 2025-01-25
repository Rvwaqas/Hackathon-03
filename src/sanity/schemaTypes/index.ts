import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import Homeproduct from '../Homeproduct'
import contact from '../contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Homeproduct,contact]
}




// {
//   _id,name,category,description,
//     stockLevel,price,discountPercentage,
//     "image":image.asset->url
// }