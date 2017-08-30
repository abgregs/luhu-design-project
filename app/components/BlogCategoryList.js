import React from 'react'
import BlogData from '../BlogData'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'


const BlogCategoryList = (props) => {

  const imgURL = '/app/img/electronics-chip-cropped.jpg'

  const style = {
    backgroundImage: `linear-gradient(rgba(38, 38, 38, 0.6),rgba(38, 38, 38, 0.8)),url(${imgURL})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% top'
  }

  const catSlug = props.match.params.category

  const posts = BlogData.getPostsFromCategory(catSlug)

  const catSlugArray = posts[0].categorySlugs
  const catNameArray = posts[0].categories
  // var cat = getCat(catSlug)
  //
  // var getCat = function(catSlug) {
  //
  //   catSlugArray.forEach((category, index) =>
  //     category === catSlug ? catNameArray[index] : null
  //   )
  // }
  var cat = catSlug.replace(/-{1,}/g,' ').replace(/(\s{1,}|\b)(\w)/g,
    function(m, space, letter) {
      return space + letter.toUpperCase();
    })

  switch (cat) {
    case 'Pla':
      cat = 'PLA'
      break;
    case '3d Printing':
      cat = '3D Printing'
      break;
    case '3d Modeling':
      cat = '3D Modeling'
      break;
    default:
    }


  return (
    <div className="bloglist-component">

      <Helmet>
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <base href="/"/>
          <meta charset="utf-8"/>
          <title>{`Blog Posts About ${cat} | Luhu Design`}</title>
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
                    <div className="categorylist-heading-container">
                      <h1 className="categorylist-heading">Category: <i>{cat}</i></h1>
                      <h2 className="categorylist-sub-heading"> {posts.length} {posts.length !== 1 ? 'Results' : 'Result'} for Blog Posts Under This Category </h2>
                      <p className="post-meta">
                        {/* Posted by <span className="post-author">{post.author}</span> on {post.date} */}
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </header>

         <div className="container">
           <div className="row">
               <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 list-container">

                 {posts.map( post => (
                   <div className="post-preview" key={post.slug}>
                       <Link to={`/blog/${post.slug}`}>
                         <h2 className="post-title">
                             {post.title}
                         </h2>
                         <h4 className="post-subtitle">
                             {post.subtitle}
                         </h4>
                       </Link>
                       <p className="post-meta">Posted by <span className="post-author">{post.author}</span> on {post.date}</p>
                     <hr/>
                   </div>
                 ))}
               </div>
             </div>
           </div>
     </div>
  )
}

export default BlogCategoryList
