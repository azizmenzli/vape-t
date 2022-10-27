import React from 'react'
import '../styles/style.css'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5">
            <img src="/assets/images/contact-us-banner-img.png" alt="Contact Us"
              height="400px" width="400px" />
              <br />
              <br/>
              <div class="content">
    
      <ul>
      <a href="https://www.facebook.com/treyozz/"><i class='bx bxl-facebook' ></i></a>
      <a href="https://www.instagram.com/sketchboyie/"><i class='bx bxl-instagram' ></i></a>
    </ul>
 
</div>
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-dark" >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact