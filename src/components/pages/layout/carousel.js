import React, { Component } from 'react'

export default class carousel extends Component {
  render() {
    return (
      <div class='container pt-5'>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src="https://bit.ly/2VWAorE" alt="Castle in the Sky" />
              <div class="container">
                <div class="carousel-caption">
                  <h1>Castle in the Sky</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum et voluptas animi rem iste necessitatibus provident non praesentium numquam. Reiciendis aspernatur modi enim vitae quos nisi odit voluptas voluptate dolor?
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://bit.ly/2BO6j6L" alt="Grave of the Fireflies" />
              <div class="container">
                <div class="carousel-caption">
                  <h1>Grave of the Fireflies</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum et voluptas animi rem iste necessitatibus provident non praesentium numquam. Reiciendis aspernatur modi enim vitae quos nisi odit voluptas voluptate dolor?
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://bit.ly/3gzdgHy" alt="My Neighbor Totoro" />
              <div class="container">
                <div class="carousel-caption">
                  <h1>My Neighbor Totoro</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum et voluptas animi rem iste necessitatibus provident non praesentium numquam. Reiciendis aspernatur modi enim vitae quos nisi odit voluptas voluptate dolor?
                  </p>
                </div>
              </div>
            </div>



          </div>
          <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>

    )
  }
}
