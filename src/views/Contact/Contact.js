import React from 'react';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    
    const onHandleSubmit = (data) =>{
      console.log("form data",data);
      
      toast.success("Send Message Successful !", {
        position: "bottom-left",
      });
      reset();
    
  }
    return (
        <>
        {/* Page Contact Start */}
          {/* Header Contact Start */}
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <Link to="/">Home</Link>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Contact</p>
            </div>
          </div>
        </div>

         
             
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
          </div>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" 
                noValidate="novalidate"
                onSubmit={handleSubmit(onHandleSubmit)}
                >
                  <div className="control-group mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" 
                      {...register("yourname", { required: true })}       
                    />  
                      {errors.yourname && <span className="help-block text-danger">Please enter your name*</span>}   
                  </div>
                  <div className="control-group mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" 
                      {...register("youremail", { required: true })}
                    />
                      {errors.youremail && <span className="help-block text-danger">Please enter your email*</span>}
                  </div>
                  <div className="control-group mb-3">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" 
                      {...register("subject", { required: true })}
                    />
                      {errors.subject && <span className="help-block text-danger">Please enter a subject*</span>}
                  </div>
                  <div className="control-group mb-3">
                    <textarea className="form-control" rows={6} id="message" placeholder="Message" 
                     {...register("message", { required: true })}
                    />
                     {errors.message && <span className="help-block text-danger">Please enter your message*</span>}
                  </div>

                  <div> 
                    <button className="btn btn-primary py-2 px-4 mr-3" type="submit" id="sendMessageButton">
                      Send Message
                    </button>
                    <button className="btn btn-primary py-2 px-4" type="button" id="sendMessageButton" onClick={() => reset()}>
                       Reset
                    </button>
                  </div> 
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
              <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
              <div className="d-flex flex-column mb-3">
                <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />54 Elzoghby Street, Nasr City,Cairo</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
              </div>
              <div className="d-flex flex-column">
                <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Moharam_BK Street, Alex</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
              </div>
            </div>
          </div>
        </div>
      
      </>     
    );
}

export default Contact;