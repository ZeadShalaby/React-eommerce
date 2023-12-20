import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem,decreaseItem,removeFromCart} from './CartSlice';

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Cart() {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
      
    const onHandleSubmitOrder = (data) =>{
        console.log("form data",data);
        toast.success("Place Order Successful !", {
          position: "bottom-left",
        });
        reset();
    }

    const productCart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleAddItem = (product) => {
        dispatch(addItem(product));
    };

    const handleDecreaseItem = (product) => {
        dispatch(decreaseItem(product));
    };
    
    const handleRemoveFromCart = (product)=>{
        dispatch(removeFromCart(product));
    }

    const subTotal = productCart.reduce((total, currentValue) => {
        return total + currentValue.cartQuantity * currentValue.price;
    }, 0);

     const total = subTotal.toFixed(2);
     const totalShiping = (subTotal+10).toFixed(2);
    

    return (
        <>
        
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">SHOPPING CART</h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <Link to="/">Home</Link>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Shopping Cart</p>
            </div>
          </div>
        </div>

         {/* content Cart */}   
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-12 table-responsive mb-5">
                    <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                        <th>Products Image</th>
                        <th>Products Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                    {productCart.map((product) => {
                        const itemPrice = (product.cartQuantity * product.price).toFixed(2);
                        return(
                            <tr key={product.id}>
                                <td className="align-middle" >
                                    <img src={product.image} alt={product.title} style={{ width: 50 }} />{" "}
                                </td>
                                <td className="align-middle">{product.title.substring(0, 12)}</td>
                                <td className="align-middle"> ${product.price}</td>
                                <td className="align-middle">
                                    <div
                                    className="input-group quantity mx-auto"
                                    style={{ width: 100 }}
                                    >
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus"
                                        onClick={() => handleDecreaseItem(product)}
                                        >
                                            <i className="fa fa-minus" />
                                        </button>
                                    </div>
                                    <span className="form-control form-control-sm bg-secondary text-center">
                                        {product.cartQuantity} 
                                    </span>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus" 
                                        onClick={() => handleAddItem(product)}
                                        >
                                        <i className="fa fa-plus" />
                                        </button>
                                    </div>
                                    </div>
                                </td>
                                <td className="align-middle">${itemPrice}</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-primary"
                                    style={{textAlign: 'right:'}}
                                    onClick={() => handleRemoveFromCart(product)}
                                    >
                                        <i className="fa fa-times" />
                                    </button>
                                </td>
                            </tr>    
                        );
                    })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
         
        <form onSubmit={handleSubmit(onHandleSubmitOrder)}>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className=" card-header bg-secondary border-0 font-weight-semi-bold mb-4">Shipping Address</h4>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Full Name</label>
                                    <input className="form-control" type="text" placeholder="John" 
                                     {...register("fullname", { required: true })}
                                    />
                                    {errors.fullname && <span className="help-block text-danger">Please enter full name*</span>}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="example@email.com"
                                    {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="help-block text-danger">Please enter email*</span>}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phone Number</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="+84"
                                    {...register("phonenumber", { required: true })}
                                    />
                                    {errors.phonenumber && <span className="help-block text-danger">Please enter phone number*</span>}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="123 Street"
                                    {...register("address", { required: true })}
                                    />
                                    {errors.address && <span className="help-block text-danger">Please enter address*</span>}
                                </div>
                            </div>
                            <h4 className="card-header bg-secondary border-0 font-weight-semi-bold mb-4">Payment</h4>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="Paypal"
                                        id="paypal"
                                        {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="paypal">
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="MoMo"
                                        id="momo"
                                        {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="momo">
                                            MoMo
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="Direct Check"
                                        id="directcheck"
                                        {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="directcheck">
                                            Direct Check
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="Bank Transfer"
                                        id="banktransfer"
                                        {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="banktransfer">
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {errors.payment && <span className="help-block text-danger">Please choose a payment method*</span>}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                        <div className="card-header bg-secondary border-0">
                            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal:</h6>
                            <h6 className="font-weight-medium">$ {total}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping:</h6>
                            <h6 className="font-weight-medium">$10</h6>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total:</h5>
                            <h5 className="font-weight-bold">$ {totalShiping}</h5>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary my-3 py-3">
                                <b>PLACE ORDER</b>
                            </button>
                            <Link to="/products" className="btn btn-block btn-primary my-3 py-3">
                                <b>KEEP SHOPPING</b>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
          
      </>
    );
}

export default Cart;










