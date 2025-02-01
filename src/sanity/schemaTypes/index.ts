import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import Homeproduct from '../Homeproduct'
import contactForm from '../contactForm'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Homeproduct,contactForm]
}




// {
//   _id,name,category,description,
//     stockLevel,price,discountPercentage,
//     "image":image.asset->url
// }