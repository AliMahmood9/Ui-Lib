import { TextArea } from "../components/Form/TextArea";

export default {
  title: "Example/TextArea",
  component: TextArea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SimpleTextArea = {
  args: {
    label: "Note",
    placeholder: "Enter Note",
    value: "",
    onChange: () => {},
    disabled: false,
  },
};

export const ErrorTextArea = {
  args: {
    label: "Note",
    placeholder: "Enter Note",
    value: "",
    onChange: () => {},
    error: "required",
    disabled: false,
  },
};

export const DisabledTextArea = {
  args: {
    label: "Note",
    placeholder: "Enter Note",
    value: "",
    onChange: () => {},
    disabled: true,
  },
};
