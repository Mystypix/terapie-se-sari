import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  config: {
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Czech Page Content",
      name: "czech",
      path: "content/czech",
      format: "mdx",
      fields: [
        {
          label: "Reasons title",
          name: "reasonsTitle",
          type: "string"
        },
        {
          label: "Reasons",
          name: "reasons",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "reasonTitle",
              type: "string"
            },
            {
              label: "Text",
              name: "reasonText",
              type: "string"
            }
          ]
        },
        {
          label: "About method title",
          name: "methodTitle",
          type: "string"
        },
        {
          label: "About method text",
          name: "methodText",
          type: "rich-text",
        },
        {
          label: "Resolutions title",
          name: "resolutionTitle",
          type: "string"
        },
        {
          label: "Reasolutions",
          name: "resolutions",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "resolutionTitle",
              type: "string"
            },
            {
              label: "Text",
              name: "resolutionText",
              type: "rich-text"
            }
          ]
        },
        {
          label: "Process title",
          name: "processTitle",
          type: "string"
        },
        {
          label: "Process steps",
          name: "processSteps",
          type: "object",
          list: true,
          fields: [
            {
              label: "Text",
              name: "processStepText",
              type: "string"
            }
          ]
        },
        {
          label: "About title",
          name: "aboutTitle",
          type: "string"
        },
        {
          label: "About text",
          name: "aboutText",
          type: "rich-text"
        },
        {
          label: "Place look title",
          name: "placeLookTitle",
          type: "string"
        },
        {
          label: "Reviews title",
          name: "reviewsTitle",
          type: "string"
        },
        {
          label: "Reviews",
          name: "reviews",
          type: "object",
          list: true,
          fields: [
            {
              label: "Name",
              name: "reviewName",
              type: "string"
            },
            {
              label: "Text",
              name: "reviewText",
              type: "rich-text"
            },
          ]
        },
        {
          label: "FAQ title",
          name: "faqTitle",
          type: "string"
        },
        {
          label: "FAQ",
          name: "faq",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "faqTitle",
              type: "string"
            },
            {
              label: "Text",
              name: "faqText",
              type: "rich-text"
            },
          ]
        },
        {
          label: "Videos title",
          name: "videosTitle",
          type: "string"
        },
        {
          label: "Contact title",
          name: "contactTitle",
          type: "string"
        },
        {
          label: "Email",
          name: "email",
          type: "string"
        },
        {
          label: "Phone",
          name: "phone",
          type: "string"
        },
        {
          label: "Price",
          name: "price",
          type: "string"
        },
      ],
    },
    {
      label: "English Page Content",
      name: "english",
      path: "content/english",
      format: "mdx",
      fields: [
        {
          label: "Reasons title",
          name: "reasonsTitle",
          type: "string"
        },
        {
          label: "Reasons",
          name: "reasons",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "reasonTitle",
              type: "string"
            },
            {
              label: "Text",
              name: "reasonText",
              type: "string"
            }
          ]
        },
        {
          label: "About method title",
          name: "methodTitle",
          type: "string"
        },
        {
          label: "About method text",
          name: "methodText",
          type: "rich-text",
        },
        {
          label: "Resolutions title",
          name: "resolutionTitle",
          type: "string"
        },
        {
          label: "Reasolutions",
          name: "resolutions",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "resolutionTitle",
              type: "string"
            },
            {
              label: "Text",
              name: "resolutionText",
              type: "rich-text"
            }
          ]
        },
        {
          label: "Process title",
          name: "processTitle",
          type: "string"
        },
        {
          label: "Process steps",
          name: "processSteps",
          type: "object",
          list: true,
          fields: [
            {
              label: "Text",
              name: "processStepText",
              type: "string"
            }
          ]
        },
        {
          label: "About title",
          name: "aboutTitle",
          type: "string"
        },
        {
          label: "About text",
          name: "aboutText",
          type: "rich-text"
        },
        {
          label: "Place look title",
          name: "placeLookTitle",
          type: "string"
        },
        {
          label: "Reviews title",
          name: "reviewsTitle",
          type: "string"
        },
        {
          label: "Reviews",
          name: "reviews",
          type: "object",
          list: true,
          fields: [
            {
              label: "Name",
              name: "reviewName",
              type: "string"
            },
            {
              label: "Text",
              name: "reviewText",
              type: "rich-text"
            },
          ]
        },
        {
          label: "FAQ title",
          name: "faqTitle",
          type: "string"
        },
        {
          label: "FAQ",
          name: "faq",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "faqTitle",
              type: "string"
            },
            {
              label: "Text",
              name: "faqText",
              type: "rich-text"
            },
          ]
        },
        {
          label: "Videos title",
          name: "videosTitle",
          type: "string"
        },
        {
          label: "Contact title",
          name: "contactTitle",
          type: "string"
        },
        {
          label: "Email",
          name: "email",
          type: "string"
        },
        {
          label: "Phone",
          name: "phone",
          type: "string"
        },
        {
          label: "Price",
          name: "price",
          type: "string"
        },
      ],
    },
    {
      label: "Images",
      name: 'images',
      path: "content/images",
      format: "mdx",
      fields: [
        {
          label: "Intro images",
          name: "introImages",
          type: "object",
          list: true,
          fields: [
            {
              label: "Intro image",
              name: "introImage",
              type: "image"
            }
          ]
        }
      ]
    },
  ],
});

export default schema;

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  cmsCallback: (cms) => {
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["czech"].includes(collection.name)) {
          if (document._sys.filename === "page") {
            return "/";
          }
        }

        if (["english"].includes(collection.name)) {
          if (document._sys.filename === "page") {
            return "/";
          }
        }

        if (["images"].includes(collection.name)) {
          if (document._sys.filename === "page") {
            return "/";
          }
        }

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
});
