var React = require('react');
var Link = require('react-router-dom').Link;
var Hubs = require('./Hubs');

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron home hero">
          <div className="main">
            <div className="content-container">
              <div className="content">
                <div className="heading-container">
                  <h2 className="brand-big">Luhu Design</h2>
                  <h1 className="heading">
                    Engineers. Designers.<br/>
                    Mechanical Problem Solvers.
                  </h1>
                  {/* <h2 className="sub-heading">  Luhu Design is a boutique design and engineering firm. We design functional products without sacrificing engineering integrity.</h2> */}


                    {/* <div className="top links-box">
                      <a href="/"></a>
                    </div>*/}


                </div>
                {/* <div className="icon-wrapper">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div> */}
            <div className="skills">
              <ul>
                <li className="col-sm-4"><h3>Physical Product Design</h3></li>
                <li className="col-sm-4"><h3>Engineering CAD</h3></li>
                <li className="col-sm-4"><h3>3D Modeling</h3></li>
                <li className="col-sm-4"><h3>Engineering Consultation</h3></li>
                <li className="col-sm-4"><h3>Rapid Prototyping</h3></li>
                <li className="col-sm-4"><h3>Mechanical Engineering</h3></li>

              </ul>
            </div>
            <div className="callout-container">
              <div className="callout">
                {/* <p className="lead">View Our Services</p> */}
                <div className="button-wrapper hero">
                <a className="button hero" href="/services" role="button">
                  <span>View Services</span>
                </a>
                {/* <div className="icon-wrapper">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="jumbotron get-in-touch">
        <div className="divider">
          <hr/>
        </div>
        <div className="main">
          <div className="content-container">
            <div className="content">
                <p className="lead">Luhu Design helps inventors and startups with their mechanical design, engineering and CAD needs. This ranges from helping to create 3D models from an idea or patent application, building and testing your first prototype or providing mechanical engineering support to IoT systems. </p>
              </div>
          </div>
          <div className="callout-container">
            <div className="callout">
              <p className="lead">Talk to us today to see how<br/>we can help solve your mechanical<br/>engineering and design challenges.</p>
              <div className="button-wrapper get-in-touch">
              <a className="button get-in-touch" href="/contact" role="button"><span>Talk to us today</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

<Hubs/>

        {/* <div className="featured-container blue-featured">
          <div className="featured">
            <div className="header">
              <div className="title-container">
                <div className="title">
                  <h2>3D Printing Services</h2>
                </div>
                <div className="sub-title">
                  <h3>
Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container marketing"> */}

      {/* <!-- Three columns of text below the carousel --> */}
      {/* <div className="row">
        <div className="col-md-4">
          <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4">
          <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
          <h2>Heading</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4">
          <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
      </div>


      {/* <!-- START THE FEATURETTES --> */}

      {/* <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={imgStyle} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15cfab49ad5%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15cfab49ad5%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7 push-md-5">
          <h2 className="featurette-heading">Second featurette heading. <span className="text-muted">Oh yeah.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 pull-md-7">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15cfab49ad8%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15cfab49ad8%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={imgStyle}/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Third featurette heading. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15cfab49ada%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15cfab49ada%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={imgStyle}/>
        </div>
      </div>
      <div className="divider">
        <hr/>
      </div>
    </div> */}

  </div>
    )
  }
}

module.exports = Home;
