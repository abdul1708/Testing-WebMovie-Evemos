import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class film extends Component {
  state = {
    film: [],
    loading: false,
  }

  componentDidMount() {
    const baseURL = 'https://ghibliapi.herokuapp.com';

    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get(`${baseURL}/films`);
      this.setState({ film: results.data });
      this.setState({ loading: false });
    }
    getPosts();
  }

  render() {

    const { film, loading } = this.state;

    if (loading) {
      return <h2>Loading..</h2>
    }

    return (
      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            {film.map(show =>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm" key={show.id}>
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" >
                    <text x="50%" y="50%" fill="#000">{show.title}</text>
                  </svg>
                  <div class="card-body">
                    <p class="card-text">{show.description.slice(0, 100) + ' ... '}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">Release Date: {show.release_date}</small>
                      <div class="btn-group">
                        <Link
                          to={'/detail/' + show.id}
                          type="button"
                          class="btn btn-primary btn-sm">
                          <i class="far fa-eye"></i>
                          <text class='text-white'> View</text>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    )
  }
}
