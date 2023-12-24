import data from "../Login/users_db.json";

function UsersDetails() {
  return (
    <>
      <div>
        <div>
          {data?.users?.map((users) => {
            return (
              <div>
                <ul>
                  <li>
                    {users.id}-{users.name}
                    <ul>
                      <li>{users.email}</li>
                      <li>{users.password}</li>
                      <li>{users.img}</li>
                      <li>{users.role}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default UsersDetails;
