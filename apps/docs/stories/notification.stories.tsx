import type { Meta, StoryObj } from "@storybook/react";
import {
  BasicButton,
  SnackbarNotification,
  useGlobalNotificationFunctions,
  useSnackbarNotificationFunctions,
} from "@ui";
import type { SnackbarNotificationProps } from "@ui";

const meta = {
  component: SnackbarNotification,
  argTypes: {
    dataSource: {
      name: "Snackbar Notification Storybook",
      requestType: "success",
      message: "Congratulations! It was successful!",
    },
    options: {
      isUseAutoHide: false,
      autoHideDuration: 5000,
    },
  },
} satisfies Meta<typeof SnackbarNotification>;

export default meta;

type Story = StoryObj<SnackbarNotificationProps>;

export const Primary: Story = {
  render: function Render(props) {
    const { setSnackbarNotificationOpen, setTargetSnackbarNotificationName } =
      useSnackbarNotificationFunctions();
    const setStoreIsUseGlobalNotification =
      useGlobalNotificationFunctions.getState().setIsUseGlobalNotification;
    const handleOpenSnackbarNotification = (): void => {
      setStoreIsUseGlobalNotification(false);
      setSnackbarNotificationOpen(true);
    };
    setTargetSnackbarNotificationName("Snackbar Notification Storybook");

    return (
      <>
        <BasicButton
          onClick={handleOpenSnackbarNotification}
          variant="contained"
        >
          알림 버튼3
        </BasicButton>
        <SnackbarNotification {...props} />
      </>
    );
  },
  name: "Notification",
  args: {
    dataSource: {
      name: "Snackbar Notification Storybook",
      requestType: "success",
      message: "Congratulations! It was successful!",
    },
    options: {
      isUseAutoHide: false,
      autoHideDuration: 5000,
    },
  },
};
