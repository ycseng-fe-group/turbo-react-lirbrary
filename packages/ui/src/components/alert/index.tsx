import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import type { AlertProps } from "../../types";

export function Alert({ children, ...other }: AlertProps): JSX.Element | null {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const { open, header, footer, onClose } = other;

  if (!open) {
    return null;
  }
  return (
    <Dialog {...other} TransitionComponent={Transition} onClose={onClose}>
      {header ? <DialogTitle>{header}</DialogTitle> : null}
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {footer ? <DialogActions>{footer}</DialogActions> : null}
    </Dialog>
  );
}

Alert.displayName = "Alert";

export default Alert;
