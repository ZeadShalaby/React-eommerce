import React from "react";
import data from "../../components/Login/users_db.json";
import { Button } from "@mui/material";

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
      <div>
        <div>
          <ul>
            <li>
              {id}-{firstname} {lastname}
            </li>
            <li>{email}</li>
            <li>{password}</li>
            <li>{img}</li>
            <li>{role}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
