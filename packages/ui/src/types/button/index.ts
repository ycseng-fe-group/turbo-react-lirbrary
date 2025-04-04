import { ButtonProps } from "@mui/material";

export interface BasicButtonProps extends Omit<ButtonProps, "children"> {
  children: React.ReactNode;
}
