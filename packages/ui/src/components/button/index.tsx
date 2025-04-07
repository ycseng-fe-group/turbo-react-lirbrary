import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import type { BasicButtonProps } from "../../types/button";

export function BasicButton({
  children,
  ...other
}: BasicButtonProps): JSX.Element {
  return (
    <Stack direction="row" spacing={2}>
      <Button type="button" {...other}>
        {children}
      </Button>
    </Stack>
  );
}

BasicButton.displayName = "Button";

export default BasicButton;
