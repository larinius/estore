"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/features/cart/cartSlice";
import { TextField } from "@mui/material";

const OrderTotal = () => {
  const cart = useAppSelector(selectCart);

  const totalSum = () => {
    const totalSum = cart.items.reduce((totalSum, cartItem) => {
      const product = cartItem.product;
      const itemTotal = product.price * cartItem.quantity;
      return totalSum + itemTotal;
    }, 0);

    return totalSum.toFixed(2);
  };

  return (
    <div className="m-4">
      <TextField
        size="medium"
        disabled
        fullWidth
        id="totalSum"
        name="totalSum"
        label="Total Sum"
        value={`$${totalSum()}`}
      />
    </div>
  );
};

export default OrderTotal;
