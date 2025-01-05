import { defineField, defineType } from "sanity";
<<<<<<< HEAD
export const blog = defineType({
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    { name: "image", type: "image", title: "Image" },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      title: "Author",
    }),
    {
      name: "mainContent",
      type: "array",
      title: "Main Content",
      of: [{ type: "block" }],
    },
    {
      name: "subPosts",
      type: "array",
      title: "Sub Posts",
      of: [{ type: "subPost" }],
    },
  ],
});
=======
export const blog = defineType( {
    name: 'post',
    type: 'document',
    title: 'Post Title',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },{name: "image", type: "image", title: "Image"},
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
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
      {
        name: 'mainContent',
        type: 'array',
        title: 'Main Content',
        of: [{ type: 'block' }],
      },
      {
        name: 'subPosts',
        type: 'array',
        title: 'Sub Posts',
        of: [{ type: 'subPost' }],
      },
    ],
  });
  
>>>>>>> 745cd7210b4f13dcde6f3eb6c0b3a3e0dd6c9451
