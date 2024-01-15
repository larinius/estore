"use client";

import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product from "@/interfaces/Product";

interface ProductGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid-wrapper w-full my-4">
      <Grid container spacing={3} className="products-grid">
        {products.map((product) => (
          <Grid className="product-item"  item key={product.id} xs={12} sm={4} md={4} gap={2}>
            <Link href={`/product/${product.id}`} passHref>
              <Card
                sx={{
                  height: 350,
                  minWidth: 220,
                  padding: 2,
                }}
              >
                <CardMedia
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 200,
                    padding: "20px",
                  }}
                >
                  <div className="image-wrapper relative aspect-square w-auto h-48">
                    <Image
                      src={product?.image || ""}
                      alt={product?.title || ""}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </CardMedia>

                <CardContent className="text-center">
                  <Typography component="div" className="line-clamp-3">
                    {product.title}
                  </Typography>

                  <Typography variant="h4" color="textSecondary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
