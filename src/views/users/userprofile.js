import React from "react";
import data from "../../components/Login/users_db.json";
import { Button } from "@mui/material";

import "../../assets/css/user.css";
const email = sessionStorage.getItem("email");
const firstname = sessionStorage.getItem("firstname");
const lastname = sessionStorage.getItem("lastname");
const password = sessionStorage.getItem("password");
const id = sessionStorage.getItem("id");
//const img = sessionStorage.getItem("img");

const onHandleSubmitLogin = (data) => {
  const email = sessionStorage.removeItem("email");
  const firstname = sessionStorage.removeItem("firstname");
  const lastname = sessionStorage.removeItem("lastname");
  const password = sessionStorage.removeItem("password");
  const id = sessionStorage.removeItem("id");
  //const img = sessionStorage.removeItem("img");
  
  window.location.reload(false);
  window.location.assign("/");
};

export default function userpage() {
  return (
    <>
      <div>
        <div>
          <ul>
            <button onClick={onHandleSubmitLogin}>logout</button>

            <li>
              {id}-{firstname} {lastname}
            </li>
            <li>{email}</li>
            <li>{password}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
