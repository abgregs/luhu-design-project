import React from 'react'
import BlogData from '../BlogData'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'


const BlogPost = (props) => {

  const post = BlogData.get(
    props.match.params.id
  )

  const style = {
    backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.6),rgba(38, 38, 38, 0.8)),url(${post.image})`,
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
          <title>{`${post.title} | Engineering Blog | Luhu Design`}</title>
          <meta name="description" content={`${post.description}`}/>
          <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
          <link rel="canonical" href={`http://www.luhudesign.com/blog/${post.slug}`} />
          <meta property="og:site_name" content="Luhu Design, LLC"/>
          <meta property="og:title" content={`${post.title} | Luhu Design`}/>
          <meta property="og:url" content={`http://www.luhudesign.com/blog/${post.slug}`}/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content={`${post.description}`}/>
          <meta property="og:image" content={`${post.image}`}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta itemprop="name" content={`${post.title}`}/>
          <meta itemprop="url" content={`http://www.luhudesign.com/blog/${post.slug}`}/>
          <meta itemprop="thumbnailUrl" content={`${post.image}?format=1000w`}/>
          <link rel="image_src" href={`${post.image}?format=1000w`}/>
          <meta itemprop="image" content={`${post.image}?format=1000w`}/>
          <meta name="twitter:title" content={`${post.title}`}/>
          <meta name="twitter:image" content={`${post.image}?format=1000w`}/>
          <meta name="twitter:url" content={`http://www.luhudesign.com/blog/${post.slug}`}/>
          <meta name="twitter:card" content="summary"/>
      </Helmet>

        <header className="intro-header" style={style}>
          <div className="row back-container text-left">
           <a href={"/blog"} className="back-link">
             <div className="back-link-wrapper">
               <span><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
               <h2>Blog Home </h2>
            </div>
          </a>
          </div>
           <div className="container">
               <div className="row">
                   <div className="col-lg-8 col-md-10">
                       <div className="heading-container">
                         <h1 className="heading">
                           {post.title}
                         </h1>
                         <h2 className="sub-heading">
                           {post.subtitle}
                         </h2>
                         <p className="post-meta">Posted by <span className="post-author">{post.author}</span> on {post.date}</p>
                       </div>
                   </div>
               </div>
           </div>
         </header>

       <div className="container">
         <div className="blog-content" dangerouslySetInnerHTML={{__html: post.content}}>


         </div>
         <div className="categories">
           <p>Categories:&nbsp;
             {post.categories.map(function(category, index) {
               return (
                 <span key={category}>
                   <Link to={`/blog/categories/${post.categorySlugs[index]}`}>
                     {category}
                   </Link>
                   {post.categories.length-1 === index ? null : <span>,&nbsp;</span>}
                 </span>
               )
             })}
           </p>
         </div>
       </div>
     </div>
  )
}

export default BlogPost
