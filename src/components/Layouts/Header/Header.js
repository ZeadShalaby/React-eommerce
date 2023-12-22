import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header(props) {
  const amountProducts = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <Link className="text-dark" to="#">
                FAQs
              </Link>
              <span className="text-muted px-2">|</span>
              <Link className="text-dark" to="#">
                Help
              </Link>
              <span className="text-muted px-2">|</span>
              <Link className="text-dark" to="#">
                Support
              </Link>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
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
                <i className="fab fa-instagram" />
              </Link>
              <Link to="#" className="text-dark pl-2" href="">
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  SF
                </span>
                Fashion
              </h1>
            </Link>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <Link to="/cart" className="btn border hover-cart">
              <i className="fas fa-shopping-cart text-primary" />
              <span className="badge">Cart ({amountProducts.length})</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <div
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
              <b>172 Le Duan Street, Da Nang City </b>
            </div>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    SF
                  </span>
                  Fashion
                </h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link">
                    Home
                  </Link>
                  <Link to="/products" className="nav-item nav-link ">
                    Product
                  </Link>
                  <Link to="/about" className="nav-item nav-link">
                    About
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                  <Link to="/cart" className="nav-item nav-link">
                    Cart
                  </Link>
                  <Link to="/userpage" className="nav-item nav-link">
                    Account
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <Link to="/login" className="nav-item nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-item nav-link">
                    Register
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
