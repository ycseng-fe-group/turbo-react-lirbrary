import type { AppBarProps } from "@mui/material";

export interface ButtonAppBarProps extends Omit<AppBarProps, "children"> {
  children: React.ReactNode;
  header?: string;
  footer?: React.ReactNode;
}
