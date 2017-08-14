var React = require('react');
var Link = require('react-router-dom').Link;
var Helmet = require('react-helmet').default;

function BlogPost (props) {



if (props.clickedPost === null) {
  return null
} else {

  var style = {
  backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.6),rgba(38, 38, 38, 0.8)),url(${props.clickedPost.image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% top'
}

 return (

<div className="post-component">

  <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <base href="/"/>
      <meta charset="utf-8"/>
      <title>{`${props.clickedPost.title} | Engineering Blog | Luhu Design`}</title>
      <meta name="description" content={`${props.clickedPost.description}`}/>
      <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
      <link rel="canonical" href={`http://www.luhudesign.com/blog${props.clickedPost.slug}`} />
      <meta property="og:site_name" content="Luhu Design, LLC"/>
      <meta property="og:title" content={`${props.clickedPost.title} | Luhu Design`}/>
      <meta property="og:url" content={`http://www.luhudesign.com/blog${props.clickedPost.slug}`}/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={`${props.clickedPost.description}`}/>
      <meta property="og:image" content={`${props.clickedPost.image}`}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta itemprop="name" content={`${props.clickedPost.title}`}/>
      <meta itemprop="url" content={`http://www.luhudesign.com/blog${props.clickedPost.slug}`}/>
      <meta itemprop="thumbnailUrl" content={`${props.clickedPost.image}?format=1000w`}/>
      <link rel="image_src" href={`${props.clickedPost.image}?format=1000w`}/>
      <meta itemprop="image" content={`${props.clickedPost.image}?format=1000w`}/>
      <meta name="twitter:title" content={`${props.clickedPost.title}`}/>
      <meta name="twitter:image" content={`${props.clickedPost.image}?format=1000w`}/>
      <meta name="twitter:url" content={`http://www.luhudesign.com/blog${props.clickedPost.slug}`}/>
      <meta name="twitter:card" content="summary"/>
  </Helmet>

    <header className="intro-header" style={style}>
      <div className="row back-container text-left">
       <a href={"/blog"} className="back-link">
         <div className="back-link-wrapper">
           <span><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
           <h2>Blog Home </h2>
         {/* <span>></span><h4>{props.selectedService.title}</h4> */}
        </div>
      </a>
      </div>
       <div className="container">
           <div className="row">
               <div className="col-lg-8 col-md-10">
                   <div className="heading-container">
                     <h1 className="heading">
                       {props.clickedPost.title}
                     </h1>
                     <h2 className="sub-heading">
                       {props.clickedPost.subtitle}
                     </h2>
                     <p className="post-meta">Posted by <span className="post-author">{props.clickedPost.author}</span> on {props.clickedPost.date}</p>
                   </div>
               </div>
           </div>
       </div>
     </header>

   <div className="container">
     <div className="blog-content" dangerouslySetInnerHTML={{__html: props.clickedPost.content}}>


     </div>
     <div className="categories">
       <p>Categories:&nbsp;
         {props.clickedPost.categories.map(function(category, index) {
           return (
             <span key={category}>
               <a href="/">{category}</a>{props.clickedPost.categories.length-1 === index ? null : <span>,&nbsp;</span>}
             </span>
            )
         })}
       </p>
     </div>
   </div>
 </div>
 
     )
   }
 }

module.exports = BlogPost;
