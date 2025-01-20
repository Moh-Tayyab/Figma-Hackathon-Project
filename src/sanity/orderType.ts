import { defineArrayMember, defineField, defineType } from "sanity";

import { BasketIcon } from "@sanity/icons";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: "orderNumber",
            title: "Order Number",
            type: "string",
            description: "Unique order number",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "stripeCheckoutSessionId",
            title: "Stripe Checkout SessionId",
            type: "string",
        }),
        defineField({
            name: "customerName",
            title: "Customer Name",
            type: "string",
            description: "The name of the customer placing the order",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "customerPhone",
            title: "Customer Phone",
            type: "string",
            description: "The phone number of the customer placing the order",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "date",
            description: "Date when the order was placed",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "products",
            title: "Products",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "product",
                            title: "Product",
                            type: "reference",
                            to: [{ type: "Product" }], // Corrected type reference
                        }),
                        defineField({
                            name: "quantity",
                            title: "Quantity Purchased",
                            type: "number",
                        }),
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.image',
                            price: 'product.price', // Assuming a price field exists
                        },
                        prepare({ product, quantity, image, price }) {
                            return {
                                title: `${product} x ${quantity}`,
                                subtitle: `Price: ${price * quantity}`,
                                media: image,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: "totalAmount",
            title: "Total Amount",
            type: "number",
            description: "Total amount paid for the order",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "amountDiscount",
            title: "Amount Discount",
            type: "number",
            description: "Discount amount applied to the order",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            description: "Current status of the order",
            options: {
                list: [
                    { value: "pending", title: "Pending" },
                    { value: "paid", title: "Paid" },
                    { value: "shipped", title: "Shipped" },
                    { value: "delivered", title: "Delivered" },
                    { value: "cancelled", title: "Cancelled" },
                ],
            },
        }),
    ],
    preview: {
        select: {
            name: "customerName",
            amount: "totalAmount",
            currency: "currency",
            orderId: "orderNumber",
        },
        prepare(select) {
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} [${orderIdSnippet}]`,
                subtitle: `${select.amount} ${select.currency}`,
                media: BasketIcon,
            };
        },
    },
});
