var React = require('react');
var Link = require('react-router-dom').Link;

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
     <div className="blog-content" dangerouslySetInnerHTML={{__html: props.clickedPost.content}}></div>
   </div>
 </div>



     )
   }
 }

module.exports = BlogPost;
