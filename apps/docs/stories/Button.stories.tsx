import type { Meta, StoryObj } from "@storybook/react";
import { BasicButton } from "@ui";
import type { BasicButtonProps } from "@ui";

const meta = {
  component: BasicButton,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
} satisfies Meta<typeof BasicButton>;

export default meta;

type Story = StoryObj<BasicButtonProps>;

export const Primary: Story = {
  render: (props) => <BasicButton {...props}>Hello</BasicButton>,
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained",
    disabled: false,
    style: {
      color: "white",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
    onClick: () => {
      alert("Hello from Turborepo!");
    },
  },
};
