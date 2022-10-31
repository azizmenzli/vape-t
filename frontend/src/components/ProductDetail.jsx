import React, { useState } from 'react'
import { useParams } from 'react-router'
import DATA from '../Data'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addItem, delItem } from '../redux/actions/index';


const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const priod = useParams();
    const proDetail = DATA.filter(x => x.id == priod.id)
    const product = proDetail[0];
    console.log(product)

    const dispatch = useDispatch()

    const handleCart = (product) => {

        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }
    return (
        <>
            <div className="container my-5 py-3">
            <NavLink to="/products" className="btn
           btn-outline-dark">Back to shop</NavLink>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.desc}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-dark my-5">{cartBtn}</button>
                        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                            Go to Cart
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        </>
    )


}

export default ProductDetail