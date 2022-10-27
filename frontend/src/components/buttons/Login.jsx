import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { FaUser } from 'react-icons/fa'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
      const { email, password } = formData;
      const navigate = useNavigate();

      const handelSubmit = (e) => {
        e.preventDefault()

        if(!password|| !email ) {
            toast.error('Please provide value into each input field');
        }else{
 
            axios
              .post("http://localhost:8000/api/users/login", {password, email})
              .then((response)=>{
                setFormData({password: "", email: "" })
                console.log(response.data) 
                if(response.data){
                    console.log(`User :  loggedin Successfully`);
                    toast.success(`User :  loggedin Successfully`);
                    setTimeout((e)=> navigate('/users'), 500 ); 
                }else{
                  toast.error(response.data);
                  setTimeout((e)=> navigate('/'), 500 );
                }
              })
              .catch(err => {toast.error(err.response.data)});

        }
    
      }

      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]:value})
    }

  return (
    <>
    
    <button type="button" className="btn btn-light ms-2" data-mdb-ripple-color="dark" 
                data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className='fa fa-user-plus ms-1'></span> Login
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
                                <span className='fa fa-google me-2'></span>Sign up in with Google
                            </button>
                            <button className="btn btn-primary btn-rounded w-100 mb-4">
                                <span className='fa fa-facebook me-2'></span>Sign up with Facebook
                            </button>
                            {/* Form start */}
                            <form onSubmit={(e)=>handelSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        value={email}
                                        placeholder='Enter your email'
                                        aria-describedby="emailHelp"
                                        onChange={(e)=>handleInputChange(e)}
                                        />
                              
                                        <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input 
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        name='password'
                                        value={password}
                                        placeholder='Enter password'
                                        onChange={(e)=>handleInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button data-bs-dismiss="modal"  type="submit" className="btn btn-outline-primary w-100 mt-5"  >Login</button>
                            </form>
                             {/* Form end */}
                        </div>
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login