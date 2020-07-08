import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
      <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>&copy; Movie Library 2020</p>
        </div>
      </footer>
    )
  }
}
