import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {userLogin } from "../features/auth/authSlice";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});
function Login() {
  const {user ,role,isAuthenticated,isError,isLoading} = useSelector((state)=>state.auth)
 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
 const dispath = useDispatch()
  const onSubmit = async (data) => {
    try{
    const res= await dispath(userLogin(data));
    if(res.payload?.data.userRole === "user"){
       toast.error("this user can'not be authenticated")
    }else{
       toast.success(res?.payload?.message)
       navigate('/admin')  
    }

  }catch(e){
    return false
  }

  };
 

  
 
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-gray-100">
        <div className="w-[80%] md:w-[60%] lg:w-[50%]">
          <h3 className="text-3xl text-center font-bold" >Welcome Back</h3>

          <h5>  {isError && <span className="text-red-500 text-md"> {isError}</span>}</h5>

          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Form.Item
              label="Email"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Input
                placeholder="Enter your email"
                onChange={(e) => setValue("email", e.target.value)}
                type="email"
                className="p-3"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              validateStatus={errors.password ? "error" : ""}
              help={errors.password?.message}
            >
              <Input.Password
                placeholder="Enter your password"
                onChange={(e) => setValue("password", e.target.value)}
                className="p-3"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="p-3 w-full "
                size="large"
                loading={isLoading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
