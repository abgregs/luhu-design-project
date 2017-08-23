import React from 'react'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Services from './Services'
import ScrollToTop from './ScrollToTop'
import Nav from './Nav'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
        <ScrollToTop>
        <div>
          <div className="page-container">
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/blog' component={Blog} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route render={function () {
                return <p>Page Not Found</p>
              }} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </ScrollToTop>
    )
  }
}

module.exports = App;
