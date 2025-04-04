import { Button } from "@mui/material";
import type { BasicButtonProps } from "../../types/button";

export function BasicButton({
  children,
  ...other
}: BasicButtonProps): JSX.Element {
  return (
    <Button type="button" {...other}>
      {children}
    </Button>
  );
}

BasicButton.displayName = "Button";

export default BasicButton;
