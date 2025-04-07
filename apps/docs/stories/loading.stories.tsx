import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "@ui";
import type { LoadingProps } from "@ui";

const meta = {
  component: Loading,
  argTypes: {
    options: {
      fullScreen: false,
      dimmed: false,
      isUseMenu: false,
      isAbsoluteCenter: false,
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<LoadingProps>;

export const Primary: Story = {
  render: function Render(props) {
    return <Loading {...props} />;
  },
  name: "Loading",
  args: {
    options: {
      fullScreen: false,
      dimmed: true,
      isUseMenu: false,
      isAbsoluteCenter: false,
    },
  },
};
