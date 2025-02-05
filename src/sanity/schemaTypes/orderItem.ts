// schemas/orderItem.ts
import { defineField, defineType } from 'sanity';

export const orderItem = defineType({
  name: 'orderItem',
  type: 'object',
  title: 'Order Item',
  fields: [
    defineField({
      name: 'myproduct',
      type: 'reference',
      to: [{ type: 'myproduct' }],
      title: 'My Product',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'priceAtTimeOfOrder',
      type: 'number',
      title: 'Price at Time of Order',
      description: 'Snapshot of product price when order was placed',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      productName: 'product.name',
      quantity: 'quantity',
      price: 'priceAtTimeOfOrder',
    },
    prepare({ productName, quantity, price }) {
      return {
        title: `${productName || 'Unknown product'} × ${quantity}`,
        subtitle: `Price: $${price}`,
      };
    },
  },
});