var React = require('react');
var Helmet = require('react-helmet').default;

class About extends React.Component {
  render() {
    return (
      <div className="jumbotron get-in-touch about">

        <Helmet>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <base href="/"/>
            <meta charset="utf-8"/>
            <title>Local Engineering and Mechanical Product Design Firm in Denver CO | Luhu Design</title>
            <meta name="description" content="Luhu design provides physical product design and engineering services for startups and inventors and is located in Denver, Colorado."/>
            <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
            <link rel="canonical" href="http://www.luhudesign.com/about"/>
            <meta property="og:site_name" content="Luhu Design, LLC"/>
            <meta property="og:title" content="Local Engineering and Mechanical Product Design Firm in Denver CO | Luhu Design"/>
            <meta property="og:url" content="http://www.luhudesign.com/about"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Luhu design provides physical product design and engineering services for startups and inventors and is located in Denver, Colorado."/>
            <meta property="og:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta property="og:image:width" content="488"/>
            <meta property="og:image:height" content="486"/>
            <meta itemprop="name" content="Services"/>
            <meta itemprop="url" content="http://www.luhudesign.com/about"/>
            <meta itemprop="thumbnailUrl" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <link rel="image_src" href="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta itemprop="image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta name="twitter:title" content="About"/>
            <meta name="twitter:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta name="twitter:url" content="http://www.luhudesign.com/about"/>
            <meta name="twitter:card" content="summary"/>

        </Helmet>


        <div className="main">
          <div className="content-container">
            <div className="content">
              <div className="row text-center about-main">
                <div className="heading-container">
                  <h1 className="heading">Meet Luhu Design</h1>
                  <h2 className="sub-heading">Mechanical Design and<br/> Engineering Firm</h2>
                  {/* <h2 className="sub-heading">Denver, Colorado</h2> */}
                </div>
                <div className="spacer"></div>
                <p className="lead">Luhu Design is an innovative and intelligent mechanical product design firm located in Denver, Colorado. We strive to provide creative designs and solutions that stay true to the basics of mechanical engineering. We promise to give your product and idea that personal touch and attention.</p>
                <div className="divider">
                  <hr/>
                </div>
                <div className="profile">
                  <img className="rounded-circle" src="/app/img/lindsey-profile.jpg" alt="lindsey-cross-profile-luhu-design"/>
                  <div className="spacer"></div>
                  <h2 className="sub-heading">Lindsey Cross</h2>
                  <h3 className="sub-heading">Founder and Chief Problem Solver</h3>
                  <div className="spacer"></div>
                  <p className="lead">Lindsey graduated from the University of Southern California with a BS in Aerospace Engineering. While there, she helped to optimize wave dynamics for the Kelly Slater Wave Co and helped develop intelligent prosthetic fingertips for SynTouch, LLC.<br/><br/>
                  After graduation, Lindsey returned to Denver to work as a mechanical engineer in the aerospace industry for over 6 years, taking numerous electronics products from concept to production and test.<br/><br/>
                  Lindsey brings her mechanical design aptitude, attention to detail, and creative mind to all projects at Luhu Design. She utilizes her extensive network of hardware engineers, software developers, and UX designers to help provide complete products to clients. </p>
                </div>
              <div className="divider">
                <hr/>
              </div>
            <div className="callout-container">
              <div className="callout">
                <p className="lead">Talk to us today to see how we can help solve your mechanical engineering and design challenges.</p>
                <div className="button-wrapper get-in-touch">
                <a className="button get-in-touch" href="/contact" role="button"><span>Talk to us today</span></a>
                </div>
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

module.exports = About;
