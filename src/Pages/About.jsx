import React from 'react'
import Footer from '../Components/Footer'

function About() {
  return (
    <div>


<section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8">
        <h3 class="fs-5 mb-2 text-secondary text-uppercase">About</h3>
        <h2 class="display-5 mb-4">Our journey began with a dream of redefining how the world perceives design.</h2>
        <button type="button" class="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">Discover More</button>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0">
      <div class="col-12 col-lg-6">
        <article>
          <div class="card border-0">
            <img class="card-img-top img-fluid m-0" loading="lazy" src="https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg" alt="Our Vision"/>
            <div class="card-body border bg-white p-4">
              <div class="entry-header mb-3">
                <h2 class="card-title entry-title h4 mb-0">
                  <a class="link-dark text-decoration-none" href="#!">Our Vision</a>
                </h2>
              </div>
              <p class="card-text entry-summary text-secondary mb-3">From sleek modernism to timeless elegance, we infuse every creation with a touch of our artistic ingenuity. As a design agency, great design can shape perceptions, inspire action, and leave an indelible mark on the world.</p>
            </div>
          </div>
        </article>
      </div>
      <div class="col-12 col-lg-6">
        <article>
          <div class="card border-0">
            <img class="card-img-top img-fluid m-0" loading="lazy" src="https://assets.cntraveller.in/photos/65e87edb6596e0aae842afe9/1:1/w_4005,h_4005,c_limit/GettyImages-1136006463%20(1).jpg" alt="Our Approach"/>
            <div class="card-body border bg-white p-4">
              <div class="entry-header mb-3">
                <h2 class="card-title entry-title h4 mb-0">
                  <a class="link-dark text-decoration-none" href="#!">Our Approach</a>
                </h2>
              </div>
              <p class="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<Footer/>
    </div>

  )
}

export default About