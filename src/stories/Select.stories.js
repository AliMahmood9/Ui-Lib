import { Select } from "../components/Form/Select";

export default {
  title: "Example/Select",
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SimpleSelect = {
  args: {
    label: "Select Countries",
    value: "",
    options: [{ label: "pak", value: "PK" }],
    onChange: () => {},
    disabled: false,
  },
};

export const SimpleSelectError = {
  args: {
    label: "Select Countries",
    value: "",
    options: [{ label: "pak", value: "PK" }],
    onChange: () => {},
    disabled: false,
    error: "required",
  },
};

export const SimpleSelectDisabled = {
  args: {
    label: "Select Countries",
    value: "",
    options: [{ label: "pak", value: "PK" }],
    onChange: () => {},
    disabled: true,
  },
};
