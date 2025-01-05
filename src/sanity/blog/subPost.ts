
import { defineType, defineField } from "sanity";
export const subPost = defineType({
    name: 'subPost',
    type: 'object',
    title: 'Sub Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{ type: 'block' }],
      },
      defineField({
        name: 'author',
        type: 'reference',
        to: [{ type: 'author' }],
        title: 'Author',
      }),
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published At',
      },
    ],
  });
  