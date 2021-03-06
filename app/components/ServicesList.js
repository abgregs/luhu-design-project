import React from 'react'
import ServicesData from '../ServicesData'
import { Link } from 'react-router-dom'
var Helmet = require('react-helmet').default;

// The ServicesList iterates over all of the services
// and creates a link to each service's details page

const ServicesList = () => (

  <div>
    <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <base href="/"/>
        <meta charset="utf-8"/>
        <title>Denver Engineering and Mechanical Design Services | Luhu Design</title>
        <meta name="description" content="Physical product design and engineering services for startups and inventors. Some of our services include Mechanical Engineering CAD, IoT Product Development, 3D Modeling, 3D Printing, Physical Product Design."/>
        <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
        <link rel="canonical" href="http://www.luhudesign.com/services"/>
        <meta property="og:site_name" content="Luhu Design, LLC"/>
        <meta property="og:title" content="Denver Engineering and Mechanical Design Services | Luhu Design"/>
        <meta property="og:url" content="http://www.luhudesign.com/services"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Physical product design and engineering services for startups and inventors. Our services include Mechanical Engineering CAD, IoT Product Development, 3D Modeling, 3D Printing, and Physical Product Design."/>
        <meta property="og:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta property="og:image:width" content="488"/>
        <meta property="og:image:height" content="486"/>
        <meta itemprop="name" content="Services"/>
        <meta itemprop="url" content="http://www.luhudesign.com/services"/>
        <meta itemprop="thumbnailUrl" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <link rel="image_src" href="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta itemprop="image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta name="twitter:title" content="Home"/>
        <meta name="twitter:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta name="twitter:url" content="http://www.luhudesign.com/services"/>
        <meta name="twitter:card" content="summary"/>

    </Helmet>

      <div className="jumbotron hero services-home">

        <header className="intro-header">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="heading-container text-center">
                          <h1 className="heading">Luhu Services</h1>
                          <div className="divider">
                            <hr/>
                          </div>
                          <h2 className="sub-heading">Mechanical Engineering and Design Services</h2>
                      </div>
                  </div>
              </div>
          </header>

        </div>

          <div className="service-list-view">
          <div className="row services-list-component text-center">
            {ServicesData.all().map(serv => (
              <div className="col-md-3 col-sm-6 col-xs-6 col-ms-12 service-listing text-center" key={serv.id}>
                  <Link
                   to={`/services/${serv.id}`}
                   className="service-list-item text-center">
                     <div className="overlay">
                       <div className="image-wrapper col text-center">
                         <img className="service-list-item-image" src={serv.image} alt={serv.id}/>
                         <h2 className="text-center">
                           {serv.title}
                         </h2>
                      </div>
                    </div>
                </Link>
              </div>
            ))}
         </div>
    </div>
  </div>


)

export default ServicesList
