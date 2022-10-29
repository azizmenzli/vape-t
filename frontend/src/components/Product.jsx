import React from 'react'
import Data from '../Data'

const Product = () => {
  const cardItem = () => {
    return (
      <div class="card" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h1>Hello</h1>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Prouducts</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {Data.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product