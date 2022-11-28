import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { router } from "./Routes";

function App() {
  return (
    <>
      <CartContextProvider>
        <div className="page">
          <div className="store-title">Store</div>
          <RouterProvider router={router} />
        </div>
      </CartContextProvider>
    </>
  );
}

export default App;
