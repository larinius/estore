"use client"

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import Link from "next/link";

import { useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/features/cart/cartSlice";

const CartIcon = () => {
  const cart = useAppSelector(selectCart);

  const productCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-icon">
      <Link href="/cart">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={productCount} color="error" className="cart-products-count">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartIcon;
