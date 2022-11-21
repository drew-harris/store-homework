import { createBrowserRouter } from "react-router-dom";
import { ProductList } from "./components/products/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
]);
