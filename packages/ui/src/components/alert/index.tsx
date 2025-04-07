import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { AlertProps } from "../../types";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

export function Alert({ children, ...other }: AlertProps): JSX.Element {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const { header, footer, onClose } = other;
  const { children: headerChildren } = header || {};
  const { children: footerChildren } = footer || {};

  return (
    <Dialog {...other} onClose={onClose} TransitionComponent={Transition}>
      {headerChildren && <DialogTitle>{headerChildren}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {footerChildren && <DialogActions>{footerChildren}</DialogActions>}
    </Dialog>
  );
}

Alert.displayName = "Alert";

export default Alert;
