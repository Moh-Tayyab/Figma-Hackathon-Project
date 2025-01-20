import { ShoppingBagIcon } from "lucide-react";
import { defineField, defineType } from "sanity";



export const productType = defineType({
  name: "Product",
  title: "Product",
  type: "document",
  icon: ShoppingBagIcon,
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {name: "slug", type: "slug", title: "Slug", options: {source: "title"}
      },
      {
        name: 'dimensions', 
        type: 'object',
        title: 'Dimensions',
        fields: [
          { name: 'length', type: 'number', title: 'Length' },
          { name: 'height', type: 'number', title: 'Height' },
          { name: 'width', type: 'number', title: 'Width' },
          { name: 'weight', type: 'number', title: 'Weight' },
          {
            name: 'mass_unit',
            type: 'string',
            title: 'Mass Unit',
            options: { list: ['cm', 'kg', 'in', 'lbs'] },
          },
          {
            name: 'distance_unit',
            type: 'string',
            title: 'Distance Unit',
            options: { list: ['cm', 'm', 'in', 'ft'] },
          },
        ],
      },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },{name: "sku", title: "Sku", type: "string"},
    {
      name: "orignalPrice",
      title: "Orignal Price",
      type: "number",
    },
    {
      name: "fakePrice",
      title: "Fake Price",
      type: "number",
    },{
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],

      description: "Add relevant tags to this product",
    },
    {name: "new", title: "New", type: "boolean"},
    {name: "about", title: "About", type: "text"},
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "inStock",
      title: "In Stock",
      type: "boolean",
    },
    {
      name: "outOfStock",
      title: "Out of Stock",
      type: "boolean",
    },
    // { name: 'stock', title: 'Stock',  type: 'reference',
    //   to: [{ type: 'inventory' }], // Reference to the inventory schema 
    //   },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      }

    },
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: {
        type: "category",
      },//Reference to the category schema
    }),
  ],
});
