import React, { Component } from 'react'
import axios from 'axios'

export default class price extends Component {
  state = {
    fish: [],
    loading: false,
  }

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get('https://ghibliapi.herokuapp.com/films/');
      this.setState({ fish: results.data });
      this.setState({ loading: false });
    }
    getPosts();
  }

  render() {

    const { fish, loading } = this.state;

    if (loading) {
      return <h2>Loading..</h2>
    }

    return (
      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            {fish.map(person =>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm" key={person.id}>
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" >
                    <text x="50%" y="50%" fill="#000">{person.title}</text>
                  </svg>
                  <div class="card-body">
                    <p class="card-text">{person.description.slice(0, 100) + ' ... '}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-toggle="modal" data-target="#exampleModal">
                          <i class="far fa-eye"></i> View</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {fish.map(detperson =>
              <div key={detperson.id} class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Detail Price</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <table class="table table-striped table-sm">
                        <tr>
                          <td>ID: </td>
                          <td>{detperson.id}</td>
                        </tr>
                        <tr>
                          <td>title: </td>
                          <td>{detperson.title}</td>
                        </tr>
                        <tr>
                          <td>description: </td>
                          <td>{detperson.description}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        <i class="fas fa-times"></i> Close
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
