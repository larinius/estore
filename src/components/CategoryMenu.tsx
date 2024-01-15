"use client"

import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useCategories } from "@/services/apiCategories";
import Link from "next/link";

const CategoryMenu = () => {
  const { categories } = useCategories();

  return (
    <div className="flex flex-col mx-4 my-6 w-64">
      {categories.map((category: string) => (
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
    </div>
  );
};

export default CategoryMenu;
