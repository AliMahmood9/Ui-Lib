import { Checkbox } from "../components/Form/Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SimpleCheckbox = {
  args: {
    label: "yes",
    value: "",
    onChange: () => {},
    disabled: false,
  },
};

export const ErrorCheckbox = {
  args: {
    label: "yes",
    value: "",
    onChange: () => {},
    disabled: false,
    error: "required",
  },
};

export const DisabledCheckbox = {
  args: {
    label: "Yes",
    value: "",
    onChange: () => {},
    disabled: true,
  },
};
