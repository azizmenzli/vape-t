import React from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {

   

    return (
        <>

            <button type="button" className="btn btn-dark ms-auto"
                data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className='fa fa-sign-in ms-1'></span> Sign In
            </button>


            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign in to Vape it</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email " id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Your Password" id="exampleInputPassword1" />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                        <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark w-100 mt-5" >Sign in</button>
                                <p className='justify-content-center'>or</p>

                                <button className="btn btn-danger btn-rounded w-100 mb-4" >
                                <span className='fa fa-google me-2'></span>Sign in with Google
                            </button>
                            <button className="btn btn-primary btn-rounded w-100 mb-4" >
                                <span className='fa fa-facebook me-2'></span>Sign in with Facebook
                            </button>

                            </form>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? <NavLink to="/Signup" className="ml-2"> Sign Up</NavLink>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>

                      

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login