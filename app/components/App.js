var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Services = require('./Services');
var BlogHome = require('./BlogHome');
var About = require('./About');
var Contact = require('./Contact');
var Footer = require('./Footer');
var ScrollToTop = require('./ScrollToTop').default;



class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <ScrollToTop>
        <div>
          <div className="page-container">
            <Nav/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/services' component={Services}/>
              <Route exact path='/services/:id' component={Services}/>
              <Route exact path='/blog' component={BlogHome}/>
              <Route exact path='/blog/:slug' component={BlogHome}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route render={function () {
                return <p>Page Not Found</p>
              }} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </ScrollToTop>
      </Router>
    )
  }
}

module.exports = App;
