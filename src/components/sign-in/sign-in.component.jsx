import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss'
import { userLogin } from "../../redux/slices/userSlice";



const SignIn = () => {
    const [values, setValues] = useState({
        userName: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

    };

    const handleChange = (event) => {
        setValues((preUser) => ({
            ...preUser,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        }));
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="userName"
                    name="userName"
                    value={values.userName}
                    handleChange={handleChange}
                    label="Username or Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton type="button" isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignIn;
