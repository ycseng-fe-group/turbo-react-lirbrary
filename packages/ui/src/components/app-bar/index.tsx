import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import type { ButtonAppBarProps } from "../../types";

export function ButtonAppBar({
  children,
  ...other
}: ButtonAppBarProps): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" {...other}>
        {children}
      </AppBar>
    </Box>
  );
}
ButtonAppBar.displayName = "AppBar";

export default ButtonAppBar;
