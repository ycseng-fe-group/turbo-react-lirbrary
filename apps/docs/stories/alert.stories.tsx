import { useState } from "@storybook/preview-api";
import { Alert, BasicButton } from "@ui";
import type { Meta, StoryObj } from "@storybook/react";
import type { BasicButtonProps } from "@ui";

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

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
          헬로
        </BasicButton>
        <Alert
          aria-describedby="alert-dialog-slide-description"
          footer={
            <BasicButton
              onClick={() => {
                setOpen(false);
              }}
            >
              확인
            </BasicButton>
          }
          header="안녕하세요"
          onClose={() => {
            setOpen(false);
          }}
          open={open}
        >
          헬로 월드
        </Alert>
      </>
    );
  },
  name: "alert",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained",
    color: "success",
    style: {
      color: "white",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};

export const Confirm: Story = {
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
          confirm
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
          header="안녕하세요"
          keepMounted
          onClose={() => {
            setOpen(false);
          }}
          open={open}
        >
          Hello Confirm
        </Alert>
      </>
    );
  },
  name: "confirm",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained",
    color: "inherit",
    style: {
      color: "black",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};
