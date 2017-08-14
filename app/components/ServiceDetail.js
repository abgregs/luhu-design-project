var React = require('react');
var Link = require('react-router-dom').Link;
var Helmet = require('react-helmet').default;

function ServiceDetail(props) {

if (props.selectedService === null) {
  return null
} else {

  var style = {
  backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.6),rgba(38, 38, 38, 0.8)),url(${props.selectedService.image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% top'

}

 return (

   <div className="jumbotron services feature" style={style}>

     <Helmet>
         <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
         <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
         <meta name="apple-mobile-web-app-capable" content="yes"/>
         <base href="/"/>
         <meta charset="utf-8"/>
         <title>{`${props.selectedService.metaTitle} | Luhu Design`}</title>
         <meta name="description" content={`${props.selectedService.description}`}/>
         <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
         <link rel="canonical" href={`http://www.luhudesign.com/services/${props.selectedService.id}`} />
         <meta property="og:site_name" content="Luhu Design, LLC"/>
         <meta property="og:title" content={`${props.selectedService.metaTitle} | Luhu Design`}/>
         <meta property="og:url" content={`http://www.luhudesign.com/services/${props.selectedService.id}`}/>
         <meta property="og:type" content="website"/>
         <meta property="og:description" content={`${props.selectedService.description}`}/>
         <meta property="og:image" content={`${props.selectedService.image}`}/>
         <meta property="og:image:width" content="1200"/>
         <meta property="og:image:height" content="630"/>
         <meta itemprop="name" content={`${props.selectedService.title}`}/>
         <meta itemprop="url" content={`http://www.luhudesign.com/services/${props.selectedService.id}`}/>
         <meta itemprop="thumbnailUrl" content={`${props.selectedService.image}?format=1000w`}/>
         <link rel="image_src" href={`${props.selectedService.image}?format=1000w`}/>
         <meta itemprop="image" content={`${props.selectedService.image}?format=1000w`}/>
         <meta name="twitter:title" content={`${props.selectedService.title}`}/>
         <meta name="twitter:image" content={`${props.selectedService.image}?format=1000w`}/>
         <meta name="twitter:url" content={`http://www.luhudesign.com/services/${props.selectedService.id}`}/>
         <meta name="twitter:card" content="summary"/>
     </Helmet>

     <div className="main">
       <div className="content-container">
         <div className="content">
           <div className="row back-container text-left">
            <a href={"/services"} className="back-link">
              <div className="back-link-wrapper">
                <span><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
                <h2>Services Home </h2>
              {/* <span>></span><h4>{props.selectedService.title}</h4> */}
             </div>
           </a>
           </div>
           <div className="heading-container">
             {/* <span className="brand-big">Luhu Design</span> */}
             <h1 className="heading">
               {props.selectedService.title}
             </h1>
             <h2 className="sub-heading">
               {props.selectedService.subtitle}
             </h2>
           </div>
           <p className="lead">{props.selectedService.leadOne}</p>
           <p className="lead" dangerouslySetInnerHTML={{__html: props.selectedService.leadTwo}}></p>
           {/* <p className="lead">{props.selectedService.leadTwo}</p> */}
           <div className="callout-container">
             <div className="callout">
               <div className="button-wrapper hero">
               <a className="button hero" href={props.selectedService.buttonLink} role="button">
                 <span>{props.selectedService.buttonText}</span>
                 </a>
               </div>
           </div>
         </div>
       </div>
     </div>
    </div>
    </div>

     )
   }
 }

module.exports = ServiceDetail;
