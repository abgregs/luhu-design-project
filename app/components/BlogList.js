import React from 'react'
import BlogData from '../BlogData'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'


// The BlogList iterates over all of the blog posts
// and creates a link to each post

const BlogList = () => (

  <div>

    <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <base href="/"/>
        <meta charset="utf-8"/>
        <title>Denver Mechanical Engineering and Design Blog | Luhu Design</title>
        <meta name="description" content="A blog by the engineering and mechanical design problem solvers of Luhu Design located in Denver, Colorado."/>
        <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
        <link rel="canonical" href="http://www.luhudesign.com/blog"/>
        <meta property="og:site_name" content="Luhu Design, LLC"/>
        <meta property="og:title" content="Denver Mechanical Engineering and Design Blog | Luhu Design"/>
        <meta property="og:url" content="http://www.luhudesign.com/blog"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="A blog by the engineering and mechanical design problem solvers at Luhu Design located in Denver, Colorado."/>
        <meta property="og:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta property="og:image:width" content="488"/>
        <meta property="og:image:height" content="486"/>
        <meta itemprop="name" content="Services"/>
        <meta itemprop="url" content="http://www.luhudesign.com/blog"/>
        <meta itemprop="thumbnailUrl" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <link rel="image_src" href="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta itemprop="image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta name="twitter:title" content="Home"/>
        <meta name="twitter:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
        <meta name="twitter:url" content="http://www.luhudesign.com/blog"/>
        <meta name="twitter:card" content="summary"/>
    </Helmet>

  <div className="jumbotron hero bloglist-component">
      <header className="intro-header">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="heading-container text-center">
                        <h1 className="heading">Luhu Blog</h1>
                        <div className="divider">
                          <hr/>
                        </div>
                        <h2 className="sub-heading">A Blog About Mechanical<br/>Engineering and Design</h2>
                    </div>
                </div>
            </div>
        </header>
      </div>


<div className="post-list-view">
  <div className="container">
    <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 list-container">

          {BlogData.all().map(post => (
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
</div>


)


export default BlogList
