import React from 'react'
import { Link } from 'react-router-dom'
import Hubs from './Hubs'
import Helmet from 'react-helmet'
import ContactButton from './ContactButton'

//Hero home image crop desk/computer image from Steno

class Home extends React.Component {
  render() {
    return (
      <div>

        <Helmet>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <base href="/"/>
            <meta charset="utf-8"/>
            <title>Engineering and Mechanical Product Design Firm in Denver CO | Luhu Design</title>
            <meta name="description" content="Luhu Design is a engineering and mechanical product design firm in Denver, Colorado. We help inventors and startups with their mechanical design, engineering and CAD needs. This ranges from helping to create 3D models from an idea or patent application, building and testing your first prototype or providing mechanical engineering support to IoT systems."/>
            <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
            <link rel="canonical" href="http://www.luhudesign.com/"/>
            <meta property="og:site_name" content="Luhu Design, LLC"/>
            <meta property="og:title" content="Engineering and Mechanical Product Design Firm in Denver CO | Luhu Design"/>
            <meta property="og:url" content="http://www.luhudesign.com/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Luhu Design is a engineering and mechanical product design firm in Denver, Colorado. We help inventors and startups with their mechanical design, engineering and CAD needs. This ranges from helping to create 3D models from an idea or patent application, building and testing your first prototype or providing mechanical engineering support to IoT systems."/>
            <meta property="og:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta property="og:image:width" content="488"/>
            <meta property="og:image:height" content="486"/>
            <meta itemprop="name" content="Services"/>
            <meta itemprop="url" content="http://www.luhudesign.com/"/>
            <meta itemprop="thumbnailUrl" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <link rel="image_src" href="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta itemprop="image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta name="twitter:title" content="Home"/>
            <meta name="twitter:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta name="twitter:url" content="http://www.luhudesign.com/"/>
            <meta name="twitter:card" content="summary"/>

        </Helmet>



        <div className="jumbotron hero home">
            <div className="container">
                <div className="heading-container">
                  <h1 className="heading">Luhu Design</h1>
                  <h2 className="sub-heading">
                    Engineers. Designers.<br/>
                    Mechanical Problem Solvers.
                  </h2>

                </div>
                {/* <div className="icon-wrapper">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div> */}
            <div className="skills">
              <ul>
                <li className="col-sm-4"><h3>Physical Product Design</h3></li>
                <li className="col-sm-4"><h3>Mechanical Design</h3></li>
                <li className="col-sm-4"><h3>3D CAD Modeling</h3></li>
                <li className="col-sm-4"><h3>Industrial Design</h3></li>
                <li className="col-sm-4"><h3>Rapid Prototyping</h3></li>
                <li className="col-sm-4"><h3>IoT Product Development</h3></li>

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

      <div className="jumbotron get-in-touch">
        <div className="container">
          <div className="content-container">
            <p className="lead">Luhu Design helps startups and hardware companies achieve their product goals through mechanical engineering and design support. This ranges from industrial and CAD design to mechanical support for your minimal viable product (MVP) to production CAD and drawings.</p>
                <div className="divider">
                  <hr/>
                </div>
                <p className="lead">Talk to us today to see how we can help solve your mechanical engineering and design challenges.</p>
                <ContactButton/>
          </div>
        </div>
      </div>

      <Hubs/>

  </div>
    )
  }
}

export default Home
