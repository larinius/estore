import React from "react";
import Product from "@/interfaces/Product";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import Image from "next/image";

import { selectCart, addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface ProductCardProps {
  product: Product | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const addToCartHandler = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const isProductInCart = cart.items.some(
    (item) => item.product.id === (product?.id || 0)
  );

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="product-card flex flex-col md:flex-row gap-8">
        <div className="flex w-full md:w-1/2 items-center justify-center">
          <CardMedia component="div" className="h-96">
            <Image
              src={product?.image || ""}
              alt={product?.title || ""}
              width={0}
              height={0}
              sizes="100vw"
              style={{ height: "100%", width: "auto" }}
            />
          </CardMedia>
        </div>

        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardContent className="flex flex-col h-full">
              <div className="flex-grow">
                <Typography variant="h5" component="h1" className="mb-2">
                  {product?.title || ""}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className="mb-2"
                >
                  Category: {product?.category || ""}
                </Typography>

                <Typography variant="h4" className="mb-2">
                  ${product?.price || ""}
                </Typography>

                <div className="mb-2">
                  <Rating
                    name="product-rating"
                    value={product?.rating?.rate || 0}
                    precision={0.1}
                    readOnly
                  />
                  <span className="ml-2">
                    {product?.rating?.count || 0} reviews
                  </span>
                </div>
              </div>

              <Button
                variant="contained"
                color={isProductInCart ? "secondary" : "primary"}
                className="add-to-cart-btn mb-4"
                onClick={addToCartHandler}
              >
                {isProductInCart ? "In Cart" : "Add to Cart"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="body2" color="textSecondary">
          {product?.description || ""}
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;
