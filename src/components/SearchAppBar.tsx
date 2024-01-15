import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CartIcon from "./ui/CartIcon";
import MenuBurger from "./ui/MenuBurger";
import SearchBox from "./ui/SearchBox";
import Link from "next/link";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuBurger />
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              E-Store
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBox />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <CartIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
