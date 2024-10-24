import { RadioButton } from "../components/Form/RadioButton";

export default {
  title: "Example/RadioButton",
  component: RadioButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SimpleRadioButton = {
  args: {
    label: "yes",
    value: "",
    onChange: () => {},
    disabled: false,
  },
};

export const ErrorRadioButton = {
  args: {
    label: "yes",
    value: "",
    onChange: () => {},
    disabled: false,
    error: "required",
  },
};

export const DisabledRadioButton = {
  args: {
    label: "Yes",
    value: "",
    onChange: () => {},
    disabled: true,
  },
};
