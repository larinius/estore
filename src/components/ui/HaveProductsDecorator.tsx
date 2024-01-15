"use client"

import { Typography } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/features/cart/cartSlice";

const HaveProductsDecorator = ({ children }: { children: React.ReactNode }) => {
  const cart = useAppSelector(selectCart);

  return (
    <>
      {cart.items.length > 0 ? (
         children 
      ) : (

        <Typography variant="h5" color="textSecondary" sx={{ marginTop: 32, margin: 6, textAlign: "center"}}>
          No products in cart
        </Typography>
      )}
    </>
  );
};

export default HaveProductsDecorator;
