import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm(props) {
    const [state, setState] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            props.showError('Password do not match.');
        }
    }

    const sendDetailsToServer = () => {
        if (state.email.length && state.passwod.length) {
            props.shoeError(null);
            const payload = {
                "email": state.email,
                "password": state.password,
            }
            // FIXME: Implement correct api link.
            axios.post('API_BASE_URL' + 'register', payload)
                .then(function (response) {
                    if (response.data.code === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration Successful. Redirecting to home page...'
                        }))
                        // redirectToHome();
                        console.log("Success")
                        props.showError(null)

                    } else {
                        props.showError('Some error ocurred');
                    }

                }).catch(function (error) {
                    console.log(error);
                });
        } else {
            props.showError('Please enter a valid username and password.')
        }
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <h3>Register</h3>
        <form>
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
                   value={state.email}
                   onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={handleSubmitClick}
            >
                Register
            </button>
        </form>
    </div>
        );
}
export default RegistrationForm;