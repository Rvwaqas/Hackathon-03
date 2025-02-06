export default {
    name: 'Homeproduct',
    type: 'document',
    title: 'Homeproduct',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: any) => Rule.required().error('Name is required'),
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
        //   maxLength: 200, 
          // slugify: input => input
          //                      .toLowerCase()
          //                      .replace(/\s+/g, '-')
          //                      .slice(0, 200)
        }
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image of the product.',
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
        
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Is Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
        
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Chair', value: 'Chair' },
            { title: 'Sofa', value: 'Sofa' },
          ],
        },
        
      },
    ],
  };