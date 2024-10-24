import { PasswordInput } from "../components/Form/PasswordInput";

export default {
  title: "Example/PasswordInput",
  component: PasswordInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SimplePasswordInput = {
  args: {
    label: "Password",
    placeholder: "Enter Password",
    value: "",
    onChange: () => {},
    disabled: false,
  },
};

export const ErrorPasswordInput = {
  args: {
    label: "Password",
    placeholder: "Enter Password",
    value: "",
    onChange: () => {},
    error: "required",
    disabled: false,
  },
};

export const DisabledPasswordInput = {
  args: {
    label: "Password",
    placeholder: "Enter Password",
    value: "",
    onChange: () => {},
    disabled: true,
  },
};
