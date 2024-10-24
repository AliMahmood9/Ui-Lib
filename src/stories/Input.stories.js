import { Input } from "../components/Form/TextInput";

export default {
  title: "Example/TextInput",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SimpleTextInput = {
  args: {
    label: "Name",
    placeholder: "Enter Name",
    value: "ali",
    onChange: () => {},
    disabled: false,
  },
};

export const ErrorTextInput = {
  args: {
    label: "Name",
    placeholder: "Enter Name",
    value: "",
    onChange: () => {},
    error: "required",
    disabled: false,
  },
};

export const DisabledTextInput = {
  args: {
    label: "Name",
    placeholder: "Enter Name",
    value: "",
    onChange: () => {},
    disabled: true,
  },
};
