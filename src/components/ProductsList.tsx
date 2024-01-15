"use client"

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";


const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const handleIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex flex-col mx-4">
      <Grid container spacing={1}>
        {cart.items.map((cartItem) => {
          const product = cartItem.product;
          return (
            <Grid
              item
              key={product.id}
              xs={12}
              container
              direction="row"
              justifyContent="center"
              className="product-item"
            >
              <Card className="flex flex-col min-h-32 flex-grow justify-center items-center">
                <Box className="flex lg:flex-row flex-col p-1 w-full">
                  <div className="flex flex-row flex-grow justify-start items-center w-full">
                    <Link
                      href={`/product/${product.id}`}
                      passHref
                      className="flex min-w-8 items-center m-2"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={64}
                        height={64}
                      />
                    </Link>

                    <Link
                      href={`/product/${product.id}`}
                      passHref
                      className="m-1"
                    >
                      <Typography variant="body1" noWrap={false} className="">
                        {product.title}
                      </Typography>
                    </Link>
                  </div>
                  <div className="flex-grow"></div>

                  <div className="flex items-center justify-center md:ml-3 md:mt-0 mt-3">
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className="md:ml-3 md:mt-0 mt-3"
                    >
                      ${product.price}
                    </Typography>

                    <IconButton
                      color="primary"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>

                    <Typography variant="body1" className="mx-2">
                      {cartItem.quantity}
                    </Typography>

                    <IconButton
                      color="primary"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </div>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
