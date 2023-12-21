import data from "../components/Login/users_db.json";
const Logins = async (req, res) => {
  const { email, password } = req.body;
  const loginuser = await UsersModel.findOne({ email }).lean();
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
};

export default Logins;
