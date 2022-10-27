import React from 'react'

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
                            <button className="btn btn-danger btn-rounded w-100 mb-4" >
                                <span className='fa fa-google me-2'></span>Sign in with Google
                            </button>
                            <button className="btn btn-primary btn-rounded w-100 mb-4">
                                <span className='fa fa-facebook me-2'></span>Sign in with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Your Password" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5" >Sign in</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login