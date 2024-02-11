import { Banner } from "../components/Banner";

export default {
  title: "Example/Banner",
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SuccessBanner = {
  args: {
    variant: "success",
    label: "Congratulations!",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
  },
};

export const WarningBanner = {
  args: {
    variant: "warning",
    label: "Attention",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  },
};

export const ErrorBanner = {
  args: {
    variant: "error",
    label: "There is a problem with your application",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  },
};

export const NeutralBanner = {
  args: {
    variant: "neutral",
    label: "Update available",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
  },
};
