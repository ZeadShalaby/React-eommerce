import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function ProductsList() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
    console.log(cat);
  };

  const searchProduct = (input) => {
    const updateList = data.filter((x) => {
      return x.title.toLowerCase().includes(input);
    });
    setFilter(updateList);
  };

  const ShowProducts = () => {
    const [inputsearch, setInputsearch] = useState("");
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        searchProduct(inputsearch);
      }
    };
    return (
      <>
        <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-end mb-4">
            <div className="col-lg-3 text-left">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products by name"
                  value={inputsearch}
                  onChange={(e) => setInputsearch(e.target.value.toLowerCase())}
                  onKeyPress={handleKeyPress}
                />
                <div
                  className="input-group-append"
                  onClick={() => searchProduct(inputsearch)}
                >
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
            <div className="dropdown ml-4">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="triggerId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b> Sort By Categorys </b>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="triggerId"
              >
                <button
                  className="dropdown-item"
                  onClick={() => setFilter(data)}
                >
                  All
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => filterProduct("women's clothing")}
                >
                  Women's Clothing
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => filterProduct("men's clothing")}
                >
                  Men's Clothing
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => filterProduct("jewelery")}
                >
                  Jewelery
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => filterProduct("electronics")}
                >
                  Electronics
                </button>
              </div>
            </div>
          </div>
        </div>

        {filter.map((product) => {
          return (
            <div
              className="col-lg-3 h-100 col-md-6 col-sm-12 pb-1"
              key={product.id}
            >
              <div className="card product-item border-0 mb-4" style={{borderRadius: "50px"}}>
                <div
                  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center "
                  style={{ height: "300px"  ,  borderRadius: "50px"}}
                >
                  <img
                    className="img-fluid "
                    style={{ height: "100%" }}
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3" >
                  <h6 className="text-truncate mb-3">
                    {" "}
                    {product.title.substring(0, 12)}{" "}
                  </h6>
                  <div className="d-flex justify-content-center">
                    <h6> ${product.price}</h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center bg-light border" 
                 style = {{borderRadius: "10px" , border: `none`}}
                
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark px-4 py-2"
                  >
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
