import { ShoppingBagIcon } from "lucide-react"
import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    icon: ShoppingBagIcon,
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {name: "slug",
            title: "Slug",
            description: "A unique string that will be used in URLs",
            type: "slug",
            options: {source: "title"}
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
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
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
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
          },{name: "sku", title: "Sku", type: "string"},
          {name: "new", title: "New", type: "boolean"},
        // {
        //     name:"isNew",
        //     type:"boolean",
        //     title:"New Badge",
        // }
    ]
})