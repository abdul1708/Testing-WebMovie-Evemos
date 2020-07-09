import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Component 
import Film from './components/pages/film/film'
import Detail from './components/pages/film/Detail'

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
          <Route exact path='/' component={Film} />
          <Route path='/detail/:_id' component={Detail} />
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}
