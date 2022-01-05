import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ email: '', username: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                username: Yup.string()
                    .max(15, 'Must be 15 characters of less')
                    .required('Required'),
                password: Yup.string()
                    .max(12, 'Must be 12 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                axios.post('/test-form-data', values)
                .then(function (response) {
                    const user = response;
                    localStorage.setItem('user', JSON.stringify(user.data));
                })
                .then(function () {
                    navigate('/profile');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <br />
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                    <br /><br />
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="test"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username ? (<div>{formik.errors.username}</div>) : null}
                    <br /><br />
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            )}
            
        </Formik>
    )
}
