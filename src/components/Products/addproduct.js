import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
function addproduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onHandleSubmitLogin = (data) => {
    let i = 0;
    const title = data.title;
    const price = data.price;
    const description = data.description;
    const image = "https://i.pravatar.cc";
    const category = data.category;

    let item = { title, price, description, image, category };
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    toast.success("Add Products Successfully!", {
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
            Add Products
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/products">Product</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Add_Product</p>
          </div>
        </div>
      </div>
      <Container className="login" maxWidth="sm">
        <h1>Products</h1>
        <form onSubmit={handleSubmit(onHandleSubmitLogin)}>
          <Box mb={2} mt={3}>
            <TextField
              type="text"
              variant="standard"
              label="title"
              fullWidth
              autoComplete="title"
              autoFocus
              {...register("title", {
                required: "title Name is required",
              })}
              error={!!errors?.title}
              helperText={errors?.title ? errors.title.message : null}
            />
          </Box>

          <Box mb={6}>
            <TextField
              type="text"
              variant="standard"
              label="description"
              fullWidth
              autoComplete="description"
              autoFocus
              {...register("description", {
                required: "description is required",
              })}
              error={!!errors?.description}
              helperText={
                errors?.description ? errors.description.message : null
              }
            />
          </Box>
          <Box mb={6}>
            <TextField
              type="file"
              variant="standard"
              label="image"
              fullWidth
              autoComplete="image"
              autoFocus
              {...register("image", { required: "image is required" })}
              error={!!errors?.image}
              helperText={errors?.image ? errors.image.message : null}
            />
          </Box>
          <Box mb={6}>
            <TextField
              type="number"
              variant="standard"
              label="price"
              fullWidth
              autoComplete="price"
              autoFocus
              {...register("price", { required: "price is required" })}
              error={!!errors?.price}
              helperText={errors?.price ? errors.price.message : null}
            />
          </Box>
          <Box mb={6}>
            <TextField
              type=""
              variant="standard"
              label="category"
              fullWidth
              autoComplete="category"
              autoFocus
              {...register("category", { required: "category is required" })}
              error={!!errors?.category}
              helperText={errors?.category ? errors.category.message : null}
            />
          </Box>
          <Box mb={2}>
            <Button
              className="bg-primary"
              type="submit"
              variant="contained"
              fullWidth
            >
              Save
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

export default addproduct;
