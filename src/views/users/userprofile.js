import React from "react";
import data from "../../components/Login/users_db.json";
import { Button, colors } from "@mui/material";

import "../../assets/css/user.css";
const email = sessionStorage.getItem("email");
const firstname = sessionStorage.getItem("firstname");
const lastname = sessionStorage.getItem("lastname");
const password = sessionStorage.getItem("password");
const id = sessionStorage.getItem("id");
const img = sessionStorage.getItem("img");
const role = sessionStorage.getItem("role");

export default function userpage() {
  return (
    <>

              <div
                 className="col-lg-3 h-100 col-md-6 col-sm-12 pb-1"
                 key={id}
              >
              <div
                className="card product-item border-0 mb-4"
                style={{ borderRadius: "50px" , width: "450px" ,margin: "10px", padding: "10px"  , marginLeft:"580px"}}
              >
              <div
                  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center "
                  style={{
                    borderRadius: "50%",
                    height: "400px",
                    width: "100%",
                  }}
                  >
                  <img
                    className="img-fluid "
                    style={{ height: "100%" }}
                    src={img }
                  />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h1 className="text-truncate mb-3">
                  {firstname} {lastname}
                  </h1>
                  <div className="d-flex justify-content-center">
                    <h6> <span style={{ color: "#b650c6" , textDecoration: "underline"}} >Account  :</span> {email}</h6>
                  </div>
                  <div>
                    <h6> <span style={{ color: "#b650c6" , textDecoration: "underline" }}>Password  :</span> {password}</h6>
                  </div>
                  <div>
                    <h6>{role}</h6>
                  </div>
              </div>
            </div>
            </div>

      
    </>
  );
}
