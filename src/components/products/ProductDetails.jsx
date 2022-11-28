import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addReview, getProductById } from "../../api/productsApi";
import { CartContext } from "../../context/CartContext";
import "./productdetails.css";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(null);
    const fetchData = async () => {
      const product = await getProductById(id);
      setProduct(product);
    };

    fetchData();
  }, [id]);

  const onNewReview = async (submission) => {
    const newReview = {
      userName: submission.name,
      rating: submission.rating,
      comment: submission.comment,
      date: new Date(),
    };
    setProduct({
      ...product,
      reviews: [...product.reviews, newReview],
    });

    addReview(product.id, newReview);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="m-auto" style={{ maxWidth: 1000 }}>
      <nav
        aria-label="breadcrumb"
        className="navbar rounded p-4 pb-2 bg-secondary"
        style={{ "--bs-bg-opacity": 0.1 }}
      >
        <ol className="breadcrumb me-4">
          <li className="breadcrumb-item" np>
            <a href="#">Tasty Snacks</a>
          </li>
          <li className="breadcrumb-item active">{product?.name || ""}</li>
        </ol>
      </nav>

      <div className="container-flow py-4 position-relative jumbotron row bg-light mt-3">
        <div className="row">
          <div className="col-4">
            <img
              alt=""
              src={product?.imageUrl}
              className="col-12 float-left"
            ></img>
          </div>
          <div className="col-6 p-5">
            <div className="fs-1 fw-lighter">{product.name}</div>
            <span className="badge p-2 fs-5 bg-primary">${product.price}</span>
            <div className="fw-lighter mt-4">{product.description}</div>
          </div>
        </div>
        <Link
          className="add-to-cart"
          to="/cart"
          onClick={() => {
            addToCart(product);
          }}
        >
          <button className="btn btn-warning">Add To Cart</button>
        </Link>
      </div>
      <ReviewList reviews={product.reviews} />
      <ReviewForm onNewReview={onNewReview} />
    </div>
  );
}

export default ProductDetails;
