import React, { useState} from 'react'
import { useDispatch } from "react-redux";
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { userRegister } from '../../redux/slices/userSlice';
import { Notification } from '../antd/notification/notification.component';
import './sign-up.styles.scss'


const SignUp = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(values.password !== values.confirmPassword) {
            Notification("warning","passwords don't match" ,"top")
            return;
        }
        console.log(values);
        dispatch(userRegister(values));
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={onChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp