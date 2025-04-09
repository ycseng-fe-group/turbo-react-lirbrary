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
          footer={
            <>
              <BasicButton
                onClick={() => {
                  setOpen(false);
                }}
              >
                확인
              </BasicButton>
              <BasicButton
                onClick={() => {
                  setOpen(false);
                }}
              >
                취소
              </BasicButton>
            </>
          }
          header="확인"
          keepMounted
          onClose={() => {
            setOpen(false);
          }}
          open={open}
        >
          터보레포 월드!
        </Alert>
      </>
    );
  },
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained",
  },
};
