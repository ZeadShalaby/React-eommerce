import data from "../usersshopping/usershistory.json";

const id = sessionStorage.getItem("id");

/*data?.users?.map((element) => {
  if (item.id == element.id) {
    console.log(element);
    // todo send info
    sessionStorage.setItem("id", element.id);

    // todo
    window.location.assign("/userpage");
  }
});
*/
function UsersDetails() {
  return (
    <>

      <div class="card-columns" style={{margin: "10px", padding: "10px" }}>

        {data?.map((item) => {
          if (id == item.users_id) {
            return (

              <div class="card" style={{ borderRadius: "50px" }}>

                <div
                  className="card product-item border-0 mb-4" style={{ borderRadius: "50px" , padding:"20px"}}

                >

                  <div
                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center "
                    style={{
                      borderRadius: "30px",
                      height: "400px",
                      width: "100%",
                      margin:"10px",
                      marginLeft:"-1px"
                      
                    }}
                  >
                    <img
                      className="img-fluid "
                      style={{ height: "100%" }}
                      src={item.image}
                    />
                  </div>

                  <div class="card-body">
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h2 class="card-title">{item.category}</h2>
                      <p class="card-text"><span style={{ color: "#b650c6", textDecoration: "underline" }} >title :</span> {item.title}</p>
                      <p class="card-text"><span style={{ color: "#b650c6", textDecoration: "underline" }}>Price :</span> {item.price}</p>
                      <p class="card-text"> <span style={{ color: "#b650c6", textDecoration: "underline" }}>Rating :</span> {item.rating && item.rating.rate}{" "}
                         <i style={{color : "#dbd034"}} className="fa fa-star"></i>{" "}</p>
                    </div>
                  </div>
                </div>
              </div>


















            );
          }
        })}

      </div>
    </>
  );
}

export default UsersDetails;
