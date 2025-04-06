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

    console.log("open : ", open);

    return (
      <>
        <Alert
          footer={
            <>
              <BasicButton onClick={() => setOpen(false)}>취소</BasicButton>
              <BasicButton autoFocus onClick={() => setOpen(false)}>
                확인
              </BasicButton>
            </>
          }
          onClose={() => setOpen(false)}
          open={open}
          title="hello World!!"
        >
          안녕하세요 Tubon repo 입니다.
          <br />
          동의하시겠습니까?
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
