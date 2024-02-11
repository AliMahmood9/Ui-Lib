import { Badge } from "../components/Badge";

export default {
  title: "Example/Badge",
  component: Badge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SquareGray = {
  args: {
    type: "square",
    text: "Badge",
    color: "gray",
  },
};

export const SquareRed = {
  args: {
    type: "square",
    text: "Badge",
    color: "red",
  },
};

export const SquareGreen = {
  args: {
    type: "square",
    text: "Badge",
    color: "green",
  },
};

export const PillGray = {
  args: {
    type: "pill",
    text: "Badge",
    color: "gray",
  },
};

export const PillRed = {
  args: {
    type: "pill",
    text: "Badge",
    color: "red",
  },
};

export const PillGreen = {
  args: {
    type: "pill",
    text: "Badge",
    color: "green",
  },
};
