import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField, Container, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import dataUser from "../Login/users_db.json";

const filePath = "../Login/users_db.json";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onHandleSubmitSinup = (data) => {
    console.log("form data", data);

    toast.success("Signup Successful !", {
      position: "bottom-left",
    });
    reset();
  };

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Register
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Register</p>
          </div>
        </div>
      </div>

      <Container className="login" maxWidth="sm">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onHandleSubmitSinup)}>
          <Box mb={2} mt={3}>
            <TextField
              type="text"
              variant="standard"
              label="First Name"
              fullWidth
              autoComplete="firstname"
              autoFocus
              {...register("firstname", {
                required: "First Name is required*",
              })}
              error={!!errors?.firstname}
              helperText={errors?.firstname ? errors.firstname.message : null}
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="text"
              variant="standard"
              label="Last Name"
              fullWidth
              autoComplete="lastname"
              autoFocus
              {...register("lasttname", { required: "Last Name is required*" })}
              error={!!errors?.lasttname}
              helperText={errors?.lasttname ? errors.lasttname.message : null}
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="email"
              variant="standard"
              label="Email"
              fullWidth
              autoComplete="email"
              autoFocus
              {...register("email", { required: "Email Name is required*" })}
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
              {...register("password", { required: "Password is required*" })}
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
              Register
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

export default Register;
