"use client"

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

import { selectMenu, showMobileMenu } from "@/redux/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import MobileMenu from "../MobileMenu";

const MenuBurger = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectMenu);

  const toggleDrawer = () => {
    dispatch(showMobileMenu(!menu.showMobileMenu));
  };

  return (
    <div>
      <IconButton
        onClick={toggleDrawer}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, display: { md: "none", sm: "flex" } }}
      >
        <MenuIcon />
      </IconButton>
      <MobileMenu />
    </div>
  );
};

export default MenuBurger;
