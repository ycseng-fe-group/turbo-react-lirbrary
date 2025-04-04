import { Dialog } from "@mui/material";
import { AlertProps } from "../../types";

export function Alert({ children, ...other }: AlertProps): JSX.Element {
  return <Dialog {...other}>{children}</Dialog>;
}

Alert.displayName = "Alert";

export default Alert;
