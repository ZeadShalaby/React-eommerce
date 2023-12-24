import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import datas from "./users_db.json";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getLocal = localStorage.getItem("localUser");
  var userr = JSON.parse(getLocal);

  const onHandleSubmitLogin = (data) => {
    reset();
    let i = 0;
    const email = data.email;
    const password = data.password;
    let item = { email, password };
    datas?.users?.map((element) => {
      if (item.password == element.password) {
        i = 1;
        console.log(element);
        // todo send info
        sessionStorage.setItem("firstname", element.firstname);
        sessionStorage.setItem("lastname", element.lastname);
        sessionStorage.setItem("email", element.email);
        sessionStorage.setItem("password", element.password);
        sessionStorage.setItem("id", element.id);
        sessionStorage.setItem("role", element.role);
        sessionStorage.setItem("img", element.img);

        // todo
        window.location.assign("/userpage");
      }
    });
    if (i == 0) {
      toast.error("oops Some thing Wrongs!", {
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Login</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Login</p>
          </div>
        </div>
      </div>
      <Container className="login" maxWidth="sm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onHandleSubmitLogin)}>
          <Box mb={2} mt={3}>
            <TextField
              type="email"
              variant="standard"
              label="email"
              fullWidth
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "email Name is required",
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
          </Box>

          <Box mb={6}>
            <TextField
              type="password"
              variant="standard"
              label="Password"
              fullWidth
              autoComplete="password"
              autoFocus
              {...register("password", { required: "Password is required" })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
          </Box>
          <Box mb={2}>
            <Button
              className="bg-primary"
              type="submit"
              variant="contained"
              fullWidth
            >
              LOGIN
            </Button>
          </Box>
          <Box mb={10}>
            <Button
              className="bg-primary"
              type="Button"
              variant="contained"
              fullWidth
              onClick={() => reset()}
            >
              RESET
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default Login;

/*
 ! to call api local but some thing wrong 
 ! api cant read item {{email , password}}
 
 ? let result = await fetch("http://localhost:8000/api/v1/users/login", {
  ?    method: "POST",
   ?   body: JSON.stringify({ item }),
    ?});
    ?result = await result.json();
    ?console.log(result);
    ?console.log(item);

     const datainfo = {
          _id: loginuser._id,
          name: loginuser.name,
          email: loginuser.email,
          role: loginuser.role,
        };
        const jwtToken = jwt.sign(datainfo, process.env.JWT_SECRECT);
        res.cookie("token", jwtToken);
        res.json("token : ", jwtToken);


*/
