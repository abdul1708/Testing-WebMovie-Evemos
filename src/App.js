import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Component 
import Album from './components/pages/album/album'

// Layout 
import Header from './components/pages/layout/header'
import Jumbotron from './components/pages/layout/jombotron'
import Footer from './components/pages/layout/footer'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main role="main">
          <Jumbotron />
          <Route exact path='/' component={Album} />
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}
