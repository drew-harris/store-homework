import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/productsApi";
import { CartContext } from "../../context/CartContext";
import "./productlist.css";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProductsFromApi = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadProductsFromApi();
  }, []);

  return (
    <div>
      <div className="store-subtitle">Tasty Snacks</div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const addItemToCart = () => {
    addToCart(product);
    navigate("/cart");
  };
  return (
    <div className="card">
      <div className="product-picture">
        <img className="card-img-top" src={product.imageUrl} alt=""></img>
        <div className="product-price fs-6 badge bg-secondary bg-success">
          {product.price}
        </div>
      </div>
      <div className="card-body text-center fw-bold">
        <div className="card-title">{product.name}</div>
        <div className="d-flex flex-column gap-2">
          <button
            className="btn btn-primary"
            onClick={() => navigate("products/" + product.id)}
          >
            Product Details
          </button>
          <button className="btn btn-warning" onClick={() => addItemToCart()}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
