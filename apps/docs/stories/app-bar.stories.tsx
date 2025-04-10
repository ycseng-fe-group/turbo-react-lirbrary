import { ButtonAppBar } from "@ui";
import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonAppBarProps } from "@ui";

const meta = {
  component: ButtonAppBar,
} satisfies Meta<typeof ButtonAppBar>;

export default meta;

type Story = StoryObj<ButtonAppBarProps>;

export const Primary: Story = {
  render: function Render(props) {
    return <ButtonAppBar {...props}>버튼앱</ButtonAppBar>;
  },
  name: "ButtonAppBar",
  args: {},
};
