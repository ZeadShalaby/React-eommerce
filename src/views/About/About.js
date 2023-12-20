import React from 'react';
import {Link} from 'react-router-dom';

function About() {
    return (
      <>
        
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">About Us</h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <Link to="/">Home</Link>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">About</p>
            </div>
          </div>
        </div>

        
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Introduce</span></h2>
          </div>
          <div className="row px-xl-5">
            <div className="col-lg-5 mb-5">
               <img className="img-fluid w-100 " src="/assets/img/sf.jpeg" alt="anh"/>
            </div>
            <div className="col-lg-7 mb-5">
            <div className="text-justify">
               We have made quality our habit. It’s not something that we just strive for – we live by this principle every day.
               Our mission is to provide a trusted and experienced online resource for the retail community. 
               We are committed to providing our members with a wide range of products and services. 
               This allows you to shop with confidence knowing you are shopping with a trusted brand that knows and understands the marketplace.
               We do this by delivering a wide selection of products and services that are tailored to fit your lifestyle. 
               The company is founded by Anna and Michael Hofer, who have a keen interest in children’s fashion.
               Their aim is to provide the best possible shopping experience for children and their parents and to support the companies that do. 
               Anna and Michael are passionate about children’s fashion and the role it plays in the lives of children. 
               They believe that children can never grow up without fashion, and that fashion should always be available for them. 
               'We love children’s clothing.
               We believe that every child should have a wonderful wardrobe filled with clothes that will make them feel good. 
               We love that children love clothes, that they want to look good and that they want to be in good clothes. 
               We have created a fashion website where parents can find their children’s clothing, so they can take care of their children’s clothing and enjoy the good times.'
              </div>
            </div>
          </div>
        </div>
        
        
      </>
      
    );
}

export default About;