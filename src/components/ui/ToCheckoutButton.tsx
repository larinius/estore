"use client"

import { Button, Typography } from "@mui/material";
import Link from "next/link";

const ToCheckoutButton = () => {
  return (
    <div className="flex flex-row mt-32 w-full justify-center items-center">
      <Button
        variant="contained"
        color="primary"
        className="mt-32 w-64 self-center proceed-to-checkout-btn"
      >
        <Link href="/checkout" passHref>
          <Typography variant="body1" color="inherit">
            Proceed to checkout
          </Typography>
        </Link>
      </Button>
    </div>
  );
};

export default ToCheckoutButton;
