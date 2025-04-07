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
    const [open, setOpen] = useState(false);

    return (
      <>
        <BasicButton
          {...props}
          onClick={() => {
            setOpen(true);
          }}
        >
          Hello
        </BasicButton>
        <Alert
          aria-describedby="alert-dialog-slide-description"
          footer={{
            children: "확인",
          }}
          header={{
            children: "안녕하세요",
          }}
          keepMounted
          onClose={() => {
            setOpen(false);
          }}
          open={open}
        >
          TurboRepo world
        </Alert>
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
