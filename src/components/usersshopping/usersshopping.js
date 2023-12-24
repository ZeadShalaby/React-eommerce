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
      <div>
        <div>
          {data?.map((item) => {
            if (id == item.users_id) {
              return (
                <div>
                  <ul>
                    <li>
                      <h5 style={{ color: "red" }}>Products_id : </h5>
                      {item.id}
                      <ul>
                        <li>
                          <h5 style={{ color: "red" }}>Users_id : </h5>
                          {item.users_id}
                        </li>

                        <li>
                          <h5 style={{ color: "red" }}>title : </h5>
                          {item.title}
                        </li>
                        <li>
                          <h5 style={{ color: "red" }}>description : </h5>
                          {item.description}
                        </li>
                        <li>
                          <h5 style={{ color: "red" }}>price : </h5>
                          {item.price}
                        </li>
                        <li>
                          <h5 style={{ color: "red" }}>image : </h5>
                          {item.image}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default UsersDetails;
