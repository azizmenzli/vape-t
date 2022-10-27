import React from 'react'
import Contact from './Contact'
import Product from './Product'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/home/novo3.jpg" className="d-block w-100" alt="SMOK Novo 2 25W Pod System" height="500px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/solo.jpg" className="d-block w-100" alt="Geek Vape Aegis Boost Pod Mod 40W" height="500px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/boost1.jpg" className="d-block w-100" alt="boost1" height="500px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/boostmax.jpg" className="d-block w-100" alt="boostmax" height="500px" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
      <Contact/>

    </div>
  )
}

export default Home