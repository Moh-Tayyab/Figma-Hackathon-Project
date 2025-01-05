import { defineType, defineField } from "sanity"

export const banner =defineType({
    name: "Banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "smallText",
      title: "Small Text",
      type: "string",
    },
    {
      name: "largeText",
      title: "Large Text",
      type: "string",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
        name: "buttonLink",
        title: "Button Link",
        type: "string",
    },
    
    {
      name: "image",
      title: "Image",
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