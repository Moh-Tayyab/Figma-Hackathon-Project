import { defineField, defineType } from "sanity";
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
