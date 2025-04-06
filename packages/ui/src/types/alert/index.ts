import { DialogProps } from "@mui/material";

export interface AlertProps extends Omit<DialogProps, "children"> {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
}
