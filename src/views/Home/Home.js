import React from 'react';
import ProductsList from '../../components/Products/ProductsList';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
       
        <div className="container-fluid mb-5">
          <div className="row border-top px-xl-5">
            <div className="col-lg-12">
              <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" style={{ height: 800}}>
                    <img className="img-fluid" src="/assets/img/slider_4.jpg" alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Fashionable Dress
                        </h3>
                        <Link to="#" className="btn btn-light py-2 px-3">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 800 }}>
                    <img className="img-fluid" src="/assets/img/ddd.jpeg" alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Classy Dress
                        </h3>
                        <Link to="#" className="btn btn-light py-2 px-3">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 800 }}>
                    <img className="img-fluid" src="/assets/img/sss.jpeg" alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Matching Clothes
                        </h3>
                        <Link to="#" className="btn btn-light py-2 px-3">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 800 }}>
                    <img className="img-fluid" src="/assets/img/couple.jpeg" alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          soft Outfits
                        </h3>
                        <Link to="#" className="btn btn-light py-2 px-3">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#header-carousel"
                  data-slide="prev"
                >
                  <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                    <span className="carousel-control-prev-icon mb-n2" />
                  </div>
                </a>
                <a
                  className="carousel-control-next"
                  href="#header-carousel"
                  data-slide="next"
                >
                  <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                    <span className="carousel-control-next-icon mb-n2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fa fa-check text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>
        
        <ProductsList/>
         
        
        <div className="container-fluid offer pt-5">
          <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
              <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                <img src="/assets/img/spring.jpeg" alt="" />
                <div className="position-relative" style={{zIndex: 1}}>
                  <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                  <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                  <Link to="#" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                <img src="/assets/img/winter_1.jpeg" alt="" />
                <div className="position-relative" style={{zIndex: 1}}>
                  <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                  <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                  <Link to="#"  className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>     
    );
}

export default Home;