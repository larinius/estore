import Product from "@/interfaces/Product";
import { CartItem } from "@/redux/features/cart/cartSlice";

export const convertCartToPlainList = (cartItems: CartItem[]): string[] => {
  return cartItems.map((cartItem) => {
    const product = cartItem.product;
    return `${product.title}, ${cartItem.quantity} x items, $${product.price}`;
  });
};

export const applyPagination = (
  products: Product[],
  page: number = 1
): { products: Product[]; pageCount: number } => {
  const limit = parseInt(process.env.NEXT_PUBLIC_PAGINATION_LIMIT || "6");
  const offset = (page - 1) * limit;

  const pageCount =
    Math.ceil((products && products.length) / (limit || 1)) || 1;

  return { products: products.slice(offset, offset + limit), pageCount };
};
