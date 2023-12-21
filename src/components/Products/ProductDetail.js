import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { addItem } from "../../views/Cart/CartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("data id", id);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="loading">
          <Skeleton height={400} />
        </div>
        <div className="loading" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ProductDetail = () => {
    return (
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5 text-center loading">
          <img
            style={{ maxWidth: 400, height: 400, width: "100%" }}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="col-lg-7 pb-5 loading">
          <h6 className="text-uppercase text-black-50"> {product.category} </h6>
          <h3 className="display-5"> {product.title} </h3>
          <p className="lead fw-bolder mb-3 ">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>{" "}
          </p>
          <h3 className="font-weight-semi-bold mb-4">$ {product.price}</h3>
          <p className="mb-4">{product.description}</p>

          <div className="d-flex align-items-center mb-4 pt-2">
            <button
              className="btn btn-primary px-3 mr-3"
              onClick={() => addProduct(product)}
            >
              <i className="fa fa-shopping-cart mr-1" /> Add To Cart
            </button>
            <Link to="/cart" className="btn btn-primary px-3">
              <i className="fa fa-arrow-right mr-1" /> Go To Cart
            </Link>
          </div>
          <div className="d-flex pt-2">
            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
            <div className="d-inline-flex">
              <Link to="#" className="text-dark px-2" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#" className="text-dark px-2" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#" className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link to="#" className="text-dark px-2" href="">
                <i className="fab fa-pinterest" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            PRODUCT DETAIL
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Product Detail</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        {loading ? <Loading /> : <ProductDetail />}
      </div>
    </>
  );
}

export default ProductDetail;
