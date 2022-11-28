import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productsApi";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProduct(null);
    const fetchData = async () => {
      const product = await getProductById(id);
      setProduct(product);
    };

    fetchData();
  }, []);

  const onNewReview = (submission) => {
    setProduct({
      ...product,
      reviews: [
        ...product.reviews,
        {
          userName: submission.name,
          rating: submission.rating,
          comment: submission.comment,
          date: new Date(),
        },
      ],
    });
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

      <div className="container-flow py-4 jumbotron row bg-light mt-3">
        <div className="row">
          <div className="col-4">
            <img src={product?.imageUrl} className="col-12 float-left"></img>
          </div>
          <div className="col-6 p-5">
            <div className="fs-1 fw-lighter">{product.name}</div>
            <span className="badge p-2 fs-5 bg-primary">${product.price}</span>
            <div className="fw-lighter mt-4">{product.description}</div>
          </div>
        </div>
      </div>
      <ReviewList reviews={product.reviews} />
      <ReviewForm onNewReview={onNewReview} />
    </div>
  );
}

export default ProductDetails;
