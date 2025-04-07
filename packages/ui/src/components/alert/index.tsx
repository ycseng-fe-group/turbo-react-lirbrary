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
    <Dialog {...other} TransitionComponent={Transition} onClose={onClose}>
      {headerChildren ? <DialogTitle>{headerChildren}</DialogTitle> : null}
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {footerChildren ? <DialogActions>{footerChildren}</DialogActions> : null}
    </Dialog>
  );
}

Alert.displayName = "Alert";

export default Alert;
