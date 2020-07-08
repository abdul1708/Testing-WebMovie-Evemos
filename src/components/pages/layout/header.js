import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class header extends Component {
  render() {
    return (
      <header>
        <div class="collapse bg-primary" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">About</h4>
                <p class="text-white">Add some information about the album below, the author, or any other background
                context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off
              to some social networking sites or contact information.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
                <ul class="list-unstyled">
                  <li><Link to='' class='text-white'>Follow on Twitter</Link></li>
                  <li><Link to='' class='text-white'>Like on Facebook</Link></li>
                  <li><Link to='' class='text-white'>Email me</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-primary shadow-sm">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <i class="fas fa-film mr-2"></i> <strong>Movie Library</strong>
            </a>
            <button class="navbar-toggler border-white" type="button" data-toggle="collapse" data-target="#navbarHeader"
              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
            </button>
          </div>
        </div>
      </header>
    )
  }
}
