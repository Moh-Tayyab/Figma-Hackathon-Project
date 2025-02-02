// schemas/order.ts
import { defineField, defineType } from 'sanity';
import { BsCartCheckFill } from "react-icons/bs";
//import { orderItem } from './orderItem';

export const order = defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  icon: BsCartCheckFill,
  fields: [
    defineField({
      name: 'customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      title: 'Customer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: "orderItem" }], // Reference the orderItem type
      title: 'Items',
    }),
    defineField({
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingAddress',
      type: 'string',
      title: 'Shipping Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Order Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Delivered', value: 'delivered' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderId',
      type: 'string',
      title: 'Order ID',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      customerName: 'customer.fullName',
      items: 'items',
      status: 'status',
      orderId: 'orderId',
    },
    prepare({ customerName, items, status, orderId }) {
      const totalItems = items ? items.length : 0;
      const totalQuantity = items
        ? items.reduce((sum: number, item: any) => sum + (item.quantity || 0), 0)
        : 0;

      return {
        title: customerName ? `${customerName.toUpperCase()} - ${status.toUpperCase()}` : 'No Name Available',
        subtitle: `Order ID: ${orderId} | Items: ${totalItems} | Quantity: ${totalQuantity}`,
        media: BsCartCheckFill,
      };
    },
  },
});