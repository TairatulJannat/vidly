import React, { Component } from 'react';
import Form from "./common/form";
import  Joi from 'joi-browser';
import * as userService from "../services/userService";
import { toast } from 'react-toastify';



class RegisterForm extends Form {
    state ={
      data:{username:"", password: "",name:""} ,
       errors: {}
       
    };

    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    };
    // username = React.createRef();

  

   
   doSubmit = async () =>{
    try{
            
      const response =  await userService.register(this.state.data)
      console.log(response);
      localStorage.setItem('token' , response.headers['x-auth-token']);
      window.location = '/';
       
    }
    catch(ex){
        if(ex.response && ex.response.status === 400){
            const errors = {...this.state.errors}
            errors.username = ex.response.data;
            this.setState({errors})
            console.log('submitted')
            // toast.warn("user Already exist")
        }
    }
   };


   
   render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          <br/>
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
 
export default RegisterForm;