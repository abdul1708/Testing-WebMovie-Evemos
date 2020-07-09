import React, { Component } from 'react'
import axios from 'axios'

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
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-dark btn-sm"
                          data-toggle="modal" data-target="#exampleModal">
                          <i class="far fa-eye"></i>
                          <text class='text-warning'> View</text>
                        </button>
                      </div>
                      <small class="text-muted">Release Date: {show.release_date}</small>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {film.map(detshow =>
              <div key={detshow.id} class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        <strong>Detail Film</strong>
                      </h5>
                    </div>
                    <div class="modal-body">
                      <div class='text-right alert-warning'>Score: {detshow.rt_score}</div>
                      <div class='text-right alert-warning'>Release Date: {detshow.release_date}</div>
                      <table class="table table-striped table-sm">
                        <tr>
                          <td><strong>Title:</strong> </td>
                          <td>{detshow.title}</td>
                        </tr>
                        <tr>
                          <td><strong>Description:</strong> </td>
                          <td>{detshow.description}</td>
                        </tr>
                      </table>
                      <table class="table table-striped table-sm">
                        <tr>
                          <td><strong>Director:</strong> </td>
                          <td><strong>Producer:</strong> </td>
                        </tr>
                        <tr>
                          <td>{detshow.director}</td>
                          <td>{detshow.producer}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        data-dismiss="modal">
                        <i class="fa fa-times"></i>
                        <text class='text-white'> Close</text>
                      </button>
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
