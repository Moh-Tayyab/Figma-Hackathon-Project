import { defineType } from "sanity";

export const author = defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'list',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'Product' } }],
        title: 'Products',
        description: 'List of products written by this author',
      },
    ],
  });
  