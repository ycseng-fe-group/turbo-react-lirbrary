import { useState } from "@storybook/preview-api";
import { Alert, BasicButton } from "@ui";
import type { Meta, StoryObj } from "@storybook/react";
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
  render: function Render(props) {
    const [open, setOpen] = useState<boolean>(false);

    return (
      <>
        <Alert onClose={() => setOpen(false)} open={open}>
          Hello Tubo wrold
        </Alert>
        <BasicButton {...props} onClick={() => setOpen(!open)}>
          Hello
        </BasicButton>
      </>
    );
  },
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
  },
};
