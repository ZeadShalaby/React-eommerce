import data from "../Login/users_db.json";
import React from "react";

function UsersDetails() {
  return (
    <>
      <div class="card-columns" style={{margin: "10px", padding: "10px" }}>

        {data?.users?.map((users) => {
          return (



            <div class="card" style={{ borderRadius: "50px" }}>

              <div
                className="card product-item border-0 mb-4" style={{ borderRadius: "50px" }}

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
                    style={{ height: "100%"  }}
                    src={users.img}
                  />
                </div>

                <div class="card-body">
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h2 class="card-title">{users.firstname} {users.lastname}</h2>
                  <p class="card-text"><span style={{ color: "#b650c6", textDecoration: "underline" }} >Account  :</span> {users.email}</p>
                  <p class="card-text"><span style={{ color: "#b650c6", textDecoration: "underline" }}>Password  :</span> {users.password}</p>
                  <p class="card-text"> {users.role}</p>
                  </div>
                </div>
              </div>
            </div>























          );
        })}

      </div>
    </>
  );
}
export default UsersDetails;
