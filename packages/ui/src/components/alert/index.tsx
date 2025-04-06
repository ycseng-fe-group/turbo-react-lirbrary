import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { AlertProps } from "../../types";
import BasicButton from "../button";
import React from "react";

export function Alert({ children, ...other }: AlertProps): JSX.Element {
  const { title, footer } = other;

  return (
    <React.Fragment>
      <Dialog
        {...other}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        {footer && <DialogActions>{footer}</DialogActions>}
      </Dialog>
    </React.Fragment>
  );
}

Alert.displayName = "Alert";

export default Alert;
