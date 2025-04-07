import { DialogProps } from "@mui/material";

interface HeaderProps {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
}
interface FooterProps {
  children: React.ReactNode;
}
export interface AlertProps extends Omit<DialogProps, "children"> {
  children: React.ReactNode;
  header?: HeaderProps;
  footer?: FooterProps;
}
