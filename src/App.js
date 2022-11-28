import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { router } from "./Routes";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <div className="page">
            <Link to="/" className="text-decoration-none">
              <div className="store-title text-decoration-none">Store</div>
            </Link>
            <Routes>
              {router.map((route) => (
                <Route path={route.path} element={route.element}></Route>
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
