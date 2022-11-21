import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import { router } from "./Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
