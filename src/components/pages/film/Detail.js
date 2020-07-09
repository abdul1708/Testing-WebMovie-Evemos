import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Detail extends Component {
  state = {
    film: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    const id = this.props.match.params._id

    fetch('https://ghibliapi.herokuapp.com/films/' + id)
      .then(
        response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Ambil data gagal!')
          }
        }
      )
      .then(
        data => this.setState({
          film: data,
          loading: false
        })
      )
      .catch(
        error => this.state({
          error: error,
          loading: true
        })
      )
  }


  render() {
    const { error, loading, film } = this.state

    if (error) {
      return <p>{error.message} </p>
    }
    if (loading) {
      return <h2>Loading..</h2>
    }

    return (
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <strong>Detail Film</strong>
            </h5>
          </div>
          <div class="modal-body">
            <div class='text-right alert-warning'>Score: {film.rt_score}</div>
            <div class='text-right alert-warning'>Release Date: {film.release_date}</div>
            <table class="table table-striped table-sm">
              <tr>
                <td><strong>Title:</strong> </td>
                <td>{film.title}</td>
              </tr>
              <tr>
                <td><strong>Description:</strong> </td>
                <td>{film.description}</td>
              </tr>
            </table>
            <table class="table table-striped table-sm">
              <tr>
                <td><strong>Director:</strong> </td>
                <td><strong>Producer:</strong> </td>
              </tr>
              <tr>
                <td>{film.director}</td>
                <td>{film.producer}</td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <Link
              type="button"
              to='/'
              class="btn btn-danger btn-sm"
              data-dismiss="modal">
              <i class="fa fa-arrow-left"></i>
              <text class='text-white'> Back</text>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

