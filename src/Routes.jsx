import { MyCart } from "./components/products/MyCart";
import ProductDetails from "./components/products/ProductDetails";
import { ProductList } from "./components/products/ProductList";

export const router = [
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
];
