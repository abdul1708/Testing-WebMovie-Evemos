import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class header extends Component {
  render() {
    return (
      <header>
        <div class="collapse bg-warning" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-dark">About</h4>
               <p class='text-dark'>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem natus dolore voluptatum! Accusamus voluptate, deserunt sed natus sequi quae adipisci eum maxime totam obcaecati error autem perferendis at iusto ipsa.
               </p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-dark">Contact</h4>
                <ul class="list-unstyled">
                  <li><Link to='' class='text-dark'>Like on Facebook</Link></li>
                  <li><Link to='' class='text-dark'>Email me</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <i class="fas fa-film mr-2"></i> <strong class='text-warning'>Movie Library</strong>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
            </button>
          </div>
        </div>
      </header>
    )
  }
}
