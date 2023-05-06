import axios from 'axios';
import React, { useState } from 'react'

    const initFormValue = {
        firstName : "",
        lastName : "",
        username : "",
        email : "",
        password : "",
        confirmPassword : ""
    }

    const isEmptyValue = (value) =>{
        return !value || value.trim().length < 1;
    } 
    const isEmailValid = (email) =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

function Signup() {

    const [formValue, setFormValue] = useState(initFormValue)
    const [formError, setFormError] = useState({})
    
    const validateForm = () =>{
        const error = {};
        if (isEmptyValue(formValue.firstName)) {
            error["firstName"] = "FirstName is required";
        }
        if (isEmptyValue(formValue.lastName)) {
            error["lastName"] = "lastName is required";
        }
        if (isEmptyValue(formValue.username)) {
          error["username"] = "username is required";
      }
        if (isEmptyValue(formValue.email)) {
            error["email"] = "email is required";
        }else{
            if (!isEmailValid(formValue.email)) {
                error["email"] = "email is invalid"
            }
        }
        if (isEmptyValue(formValue.password)) {
            error["password"] = "password is required";
        }
        if (isEmptyValue(formValue.confirmPassword)) {
            error["confirmPassword"] = "Confirm Password is required";
        } else if (formValue.confirmPassword !== formValue.password) {
            error["confirmPassword"] = "Confirm password not match";
        }
        setFormError(error);

        return Object.keys(error).length === 0;
    };
    const handleChange = (event) =>{
        const {value, name} = event.target;
        setFormValue({
            ...formValue,
            [name] : value,
        });
    };
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if (validateForm()) {
          await axios.post("http://localhost:3000/users", formValue);
          window.location.href = "/login";
          alert("Bạn đã đăng kí thành công, tới trang đăng nhập")
        }else{
            alert("form invalidate");
        }
        
    }
    console.log(formError);
    console.log(formValue);
  return (
    <div>
  <div className="main">
    <label className="label1" htmlFor="chk" aria-hidden="true">
      Sign up
    </label>
    <input
      id="usernameSignup"
      className="input1"
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formValue.firstName}
      onChange={handleChange}
    />
    {formError.firstName && (
        <div className='error'> 
            {formError.firstName}
        </div>
    )}
    <input
      id="usernameSignup"
      className="input1"
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formValue.lastName}
      onChange={handleChange}
    />
      {formError.lastName && (
        <div className='error'>
            {formError.lastName}
        </div>
    )}
        <input
      id="usernameSignup"
      className="input1"
      type="text"
      name="username"
      placeholder="User Name"
      value={formValue.username}
      onChange={handleChange}
    />
      {formError.lastName && (
        <div className='error'>
            {formError.username}
        </div>
    )}
    <input
      id="emailSignup"
      className="input1"
      type="email"
      name="email"
      placeholder="Email"
      value={formValue.email}
      onChange={handleChange}
    />
      {formError.email && (
        <div className='error'>
            {formError.email}
        </div>
    )}
    <input
      id="passwordSignup"
      className="input1"
      type="password"
      name="password"
      placeholder="Password"
      value={formValue.password}
      onChange={handleChange}
    />
      {formError.password && (
        <div className='error'>
            {formError.password}
        </div>
    )}
    <input
      id="passwordSignup"
      className="input1"
      type="password"
      name="confirmPassword"
      placeholder="ConfirmPassword"
      value={formValue.confirmPassword}
      onChange={handleChange}
    />
      {formError.confirmPassword && (
        <div className='error'>
            {formError.confirmPassword}
        </div>
    )}
    <button className="button1" onClick={(event)=>handleSubmit(event)}>
      Sign up
    </button>

  </div>               
    </div>
  )
}

export default Signup