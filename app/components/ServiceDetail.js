import React from 'react'
import ServicesData from '../ServicesData'
import { Link } from 'react-router-dom'
var Helmet = require('react-helmet').default;

// The ServiceDetail looks up the service using the id from
// the URL's pathname and displays that service's details page.

const ServiceDetail = (props) => {
  const service = ServicesData.get(
    props.match.params.id
  )

  const style = {
  backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.6),rgba(38, 38, 38, 0.8)),url(${service.image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% top'

}

  return (
    <div className="jumbotron hero service-detail" style={style}>

      <Helmet>
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <base href="/"/>
          <meta charset="utf-8"/>
          <title>{`${service.metaTitle} | Luhu Design`}</title>
          <meta name="description" content={`${service.description}`}/>
          <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
          <link rel="canonical" href={`http://www.luhudesign.com/services/${service.id}`} />
          <meta property="og:site_name" content="Luhu Design, LLC"/>
          <meta property="og:title" content={`${service.metaTitle} | Luhu Design`}/>
          <meta property="og:url" content={`http://www.luhudesign.com/services/${service.id}`}/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content={`${service.description}`}/>
          <meta property="og:image" content={`${service.image}`}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta itemprop="name" content={`${service.title}`}/>
          <meta itemprop="url" content={`http://www.luhudesign.com/services/${service.id}`}/>
          <meta itemprop="thumbnailUrl" content={`${service.image}?format=1000w`}/>
          <link rel="image_src" href={`${service.image}?format=1000w`}/>
          <meta itemprop="image" content={`${service.image}?format=1000w`}/>
          <meta name="twitter:title" content={`${service.title}`}/>
          <meta name="twitter:image" content={`${service.image}?format=1000w`}/>
          <meta name="twitter:url" content={`http://www.luhudesign.com/services/${service.id}`}/>
          <meta name="twitter:card" content="summary"/>
      </Helmet>

      <div className="row back-container text-left">
         <a href={"/services"} className="back-link">
           <div className="back-link-wrapper">
             <span><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
             <h2>Services Home </h2>
          </div>
        </a>
      </div>

      <div className="container">
        <div className="heading-container">
          <h1 className="heading">
            {service.title}
          </h1>
          <h2 className="sub-heading">
            {service.subtitle}
          </h2>
        </div>
        <div className='services-content-container'>
          <p className="lead">{service.leadOne}</p>
          <p className="lead">{service.leadTwo}</p>
        </div>
        <div className="callout-container">
          <div className="callout">
            <div className="button-wrapper hero">
            <a className="button hero dark-bg" href={service.buttonLink} role="button">
              <span>{service.buttonText}</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceDetail
