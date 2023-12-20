import React from 'react';
import {Link} from 'react-router-dom';
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { useForm } from "react-hook-form";



function Login() {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
      
    const getLocal = localStorage.getItem("localUser");
    var  user   = JSON.parse(getLocal);
    console.log("user",user)
    

    const onHandleSubmitLogin = (data) =>{
        console.log("form data login",data);
       
    }


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

         
         <Container className='login' maxWidth="sm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onHandleSubmitLogin)}>
          <Box mb={2} mt={3}>
            <TextField
            type="email"
              variant="standard"
              label="Email"
              fullWidth
              autoComplete="email"
              autoFocus
              {...register("email", { required: "Email Name is required"})}
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
              {...register("password", { required: "Password is required"})}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
          </Box>
          <Box mb={2}>
              <Button className='bg-primary' type="submit" variant="contained" fullWidth>
                  LOGIN
              </Button>
          </Box>
          <Box mb={10}>
              <Button className='bg-primary' type='Button'  variant="contained"  fullWidth onClick={() => reset()}>
                  RESET
              </Button>
          </Box>
        </form>
      </Container>

        
        
      </>
    );
}

export default Login;


