import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "Product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {name: "slug", type: "slug", title: "Slug", options: {source: "title"}
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
      },
    }),
  ],
});
