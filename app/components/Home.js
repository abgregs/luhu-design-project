import React from 'react'
import { Link } from 'react-router-dom'
import Hubs from './Hubs'
import Helmet from 'react-helmet'
import LuhuIntroHome from './LuhuIntroHome'
import HeroMain from './HeroMain'

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

      <HeroMain/>
      <LuhuIntroHome/>
      <Hubs/>

  </div>
    )
  }
}

export default Home
