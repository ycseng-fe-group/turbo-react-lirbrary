import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
