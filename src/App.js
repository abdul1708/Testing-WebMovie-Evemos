import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Component 
import Price from './components/pages/price/price'

// Layout 
import Header from './components/pages/layout/header'
import Carousel from './components/pages/layout/carousel'
import Footer from './components/pages/layout/footer'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main role="main">
          <Carousel />
          <Route exact path='/' component={Price} />
        </main>
        <Footer /> 
      </BrowserRouter>
    )
  }
}
