import { Testinomial } from "../components/Testinomial";

export default {
  title: "Example/Testinomial",
  component: Testinomial,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const TestinomialWithPic = {
  args: {
    name: "May Andersons",
    designation: "Workcation, CTO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ",
  },
};
