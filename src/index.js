import Interface from "./interface.vue";

export default {
  id: "file-preview",
  name: "File Preview",
  description:
    "Preview single file for doc, docx, pdf, jpg, png . Uses a static access token to fetch the file.",
  icon: "text_fields",
  component: Interface,
  types: ["string"],
  group: "presentation",
  relational: true,
  options: () => {
    return [
      {
        field: "fileField",
        name: "File Field",
        type: "string",
        meta: {
          width: "full",
          interface: "input",
          options: {
            placeholder: "Enter the file field name to be displayed",
          },
        },
      },
      {
        field: "height",
        name: "Field Height",
        type: "string",
        meta: {
          width: "full",
          interface: "input",
          note: "Optional height in px. Default is 500px",
          options: {
            placeholder: "500px",
          },
        },
      },
      {
        field: "assetsToken",
        name: "Static Access Token",
        type: "string",
        meta: {
          note: "Static access token is appended to the assets' URL",
          width: "full",
          interface: "input",
          placeholder: "A static access token with read access to the assets",
        },
      },
    ];
  },
};
