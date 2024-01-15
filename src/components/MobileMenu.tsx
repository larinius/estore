"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useCategories } from "@/services/apiCategories";
import Link from "next/link";

import { selectMenu, showMobileMenu } from "@/redux/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function MobileMenu() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectMenu);

  const { categories } = useCategories();

  const toggleDrawer = () => {
    dispatch(showMobileMenu(false));
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <Link href="/">
          <ListItem>
            <ListItemButton>
              <ListItemText
                primary="Home"
                style={{ textTransform: "uppercase" }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {categories.map((category, index) => (
          <ListItem key={category} disablePadding={false}>
            <Link href={`/category/${category}`} passHref>
              <ListItemButton>
                <ListItemText
                  primary={category}
                  style={{ textTransform: "uppercase" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={menu.showMobileMenu} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </div>
  );
}
