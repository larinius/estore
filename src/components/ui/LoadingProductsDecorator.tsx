import { Typography } from "@mui/material";
import LoadSpinner from "./LoadSpinner";

interface LoadingProductsDecoratorProps {
  isLoading: boolean;
  error: any;
  children: React.ReactNode;
}

const LoadingProductsDecorator = ({
  isLoading,
  error,
  children,
}: LoadingProductsDecoratorProps) => {
  if (error) {
    return (
      <Typography
        variant="h5"
        color="textSecondary"
        sx={{ marginTop: 32, margin: 6, textAlign: "center" }}
      >
        Error loading products
      </Typography>
    );
  }

  if (isLoading) {
    return <LoadSpinner />;
  }

  return <>{children}</>;
};

export default LoadingProductsDecorator;
